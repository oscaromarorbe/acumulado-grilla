
function Item({name, image, date, website}) {
  return (
    <article className="mod-caja-nota lugares w-100-mobile">
      <section className="cont-figure">
        <a href={website} className="figure">
          <picture className="content-pic picture">
            <img src={image} alt={name} className="content-img" />
          </picture>
        </a>
      </section>
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <b>{name}</b>
        </h2>
        <h4 className="com-date">{date}</h4>
      </div>
    </article>
  );
}

export default Item;
