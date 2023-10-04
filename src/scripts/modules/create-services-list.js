// Data for each li element
const servicesData = [
  {
    id: 1,
    altText: 'Прибирання кімнат',
    labelText: 'Прибирання кімнат',
  },
  {
    id: 2,
    altText: 'Прибирання кухні',
    labelText: 'Прибирання кухні',
  },
  {
    id: 3,
    altText: 'Прибирання санвузла',
    labelText: 'Прибирання санвузла',
  },
  {
    id: 4,
    altText: 'Прибирання та виніс сміття',
    labelText: 'Прибирання та виніс сміття',
  },
  {
    id: 5,
    altText: 'Миття вікон',
    labelText: 'Миття вікон',
  },
  {
    id: 6,
    altText: 'Усунення водного нальоту',
    labelText: 'Усунення водного нальоту',
  },
  {
    id: 7,
    altText: 'Хімчистка диванів',
    labelText: 'Хімчистка диванів',
  },
  {
    id: 8,
    altText: 'Миття стін',
    labelText: 'Миття стін',
  },
  {
    id: 9,
    altText: 'Миття підлоги',
    labelText: 'Миття підлоги',
  },
  {
    id: 10,
    altText: 'Миття посуду',
    labelText: 'Миття посуду',
  },
  {
    id: 11,
    altText: 'Усунення жиру та нагару',
    labelText: 'Усунення жиру та нагару',
  },
  {
    id: 12,
    altText: 'Пилосос',
    labelText: 'Пилосос',
  },
];

const ulElement = document.querySelector('.block-wrapper.services-types__list');
servicesData.forEach((service) => {
  const liElement = document.createElement('li');
  liElement.className = 'buildings__item services-types__item';
  const imageId = service.id;
  const pngSrc = new URL(`../../images/services/${imageId}@1x.png`, import.meta.url);
  console.log('pngSrc: ', pngSrc);
  const webpSrc = new URL(`../../images/services/${imageId}@1x.webp`, import.meta.url);

  liElement.innerHTML = `
    <div class="buildings__icon-wrap">
      <picture class="services__image">
        <source
          srcset="${webpSrc} 1x, ${new URL(`../../images/services/${imageId}@2x.webp`, import.meta.url)} 2x"
          type="image/webp"
        />
        <source
          srcset="${pngSrc} 1x, ${new URL(`../../images/services/${imageId}@2x.png`, import.meta.url)} 2x"
          type="image/png"
        />
        <img
          width="100"
          height="100"
          src="${pngSrc}"
          alt="${service.altText}"
        />
      </picture>
    </div>
    <h3 class="block__title buildings__text services-types__text">${service.labelText}</h3>
  `;

  ulElement.appendChild(liElement);
});
