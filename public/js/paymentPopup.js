const form = document.getElementById("bookForm");
const modal = document.getElementById("bookingModal");
const closeBtn = document.getElementById("closeModal");

const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");
const totalPrice = document.getElementById("totalPrice");
const priceTag = document.getElementById("pricePerNight");
const LISTING_ID = modal?.dataset?.listing;


const payBtn = document.getElementById("rzpPayBtn");

// ⛑ Price per night (safe)
const pricePerNight = Number(priceTag?.dataset?.price || 0);


// ⭐ Set Default Total (only if element exists)
if (totalPrice && priceTag) {
  totalPrice.innerText = `Total (1 night): ₹${pricePerNight}`;
  totalPrice.dataset.amount = pricePerNight;
}


// ==== SET MIN DATE ====
if (checkIn && checkOut) {

  let today = new Date().toISOString().split("T")[0];
  checkIn.min = today;
  checkOut.min = today;

  checkIn.addEventListener("change", () => {
    checkOut.min = checkIn.value;
  });
}


// ==== OPEN POPUP ====
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const res = await fetch(form.action, { method: "POST" });
    const data = await res.json();

    if (data.openPopup) modal.style.display = "flex";
  });
}


// ==== CLOSE POPUP ====
closeBtn?.addEventListener("click", () => modal.style.display = "none");

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});


// ==== PRICE CALCULATION ====
function calculateTotal() {

  if (!checkIn || !checkOut || !totalPrice) return;

  if (checkIn.value && checkOut.value) {

    const inDate = new Date(checkIn.value);
    const outDate = new Date(checkOut.value);

    const nights = (outDate - inDate) / (1000 * 60 * 60 * 24);

    if (nights > 0) {

      const total = nights * pricePerNight;

      totalPrice.innerText =
        `Total (${nights} night${nights > 1 ? "s" : ""}): ₹${total}`;

      totalPrice.dataset.amount = total;
    }
  }
}

checkIn?.addEventListener("change", calculateTotal);
checkOut?.addEventListener("change", calculateTotal);


// ==== RAZORPAY BUTTON ====
payBtn?.addEventListener("click", async () => {

  if (!totalPrice) return;

  const amount = Number(totalPrice.dataset.amount || pricePerNight);

  const res = await fetch("/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount })
  });

  const order = await res.json();

  var options = {
    key: window.RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: "INR",
    name: "WanderLust Stay",
    description: "Room Booking Payment",
    order_id: order.id,

  handler: async function (response){

  try{
    await fetch("/bookings/create",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        listingId: LISTING_ID,
        startDate: checkIn.value,
        endDate: checkOut.value,
        paymentStatus:"paid"
      })
    });

    // 👉 booking save hone ke baad redirect
    window.location.href = "/profile";

  }catch(err){
     alert("Booking save failed ❌");
     console.log(err);
  }
}



 };

  var rzp1 = new Razorpay(options);
  rzp1.open();
});




