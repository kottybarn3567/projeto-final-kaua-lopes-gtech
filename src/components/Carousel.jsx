const Carousel = ({ title, desc, content, img }) => {

  // codigo

  return (
    <>
      <div className="slide-home d-flex justi-cont-center align-i-center">
        <div className="new d-flex flex-col">
          <a className="text-warning bold-700 font-16" href="">{content}</a>
          <h1 className="font-64">{title}</h1>
          <h2 className="font-18 text-dark-gray-2 bold-normal">{desc}</h2>
          <button className="button-general bg-primary-btn transiton02s">Ver Ofertas</button>
        </div>
        <div className="product">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Carousel;