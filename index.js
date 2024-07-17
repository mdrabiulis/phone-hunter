// Dataload section

const loadPhoneData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  dataShowUi(phones);
};
loadPhoneData();

const dataShowUi = (phones) => {
  const div = document.getElementById("phons-contaner");
  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 w-96 shadow-xl`;
    phoneCard.innerHTML = `
      <figure>
    <img
      src="${phone.image}"
      alt="Shoes" />
  </figure>
    <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
    <button class="btn btn-primary">Buy Now</button>
    </div>
    </div>`;

    div.appendChild(phoneCard);
    console.log(phone.image);
  });
};
