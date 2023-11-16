import Content from "./Content"
import {Context} from "../App"
import {useContext} from 'react'

function Container({data, loading}) {
  const tags = useContext(Context)[1]
  return (
    <div className="lay-sidebar">
      <div className="sidebar-main">
        <div className="row">
          <div className="com-titleWithfollow hlp-marginBottom-15">
            <h1 className="com-title-section-xl hlp-marginBottom-40">Acumulado Grilla</h1>
          </div>
        </div>
        <div className="row">
          <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
            {tags && tags.map(tag => <a href={`/tema/${tag.slug}`} key={tag.text}>{tag.text}</a>)}
          </div>
        </div>
        <Content />
        <section className="row">
          <div className="col-12 hlp-text-center hlp-margintop-40">
            <button className="--btn --secondary">más notas de acumulado grilla</button>
          </div>
        </section>
      </div>
      <div className="sidebar-aside">
        <div className="banner --desktop --large"></div>
        <div className="com-ranking hlp-none hlp-tablet-none">
          <h2 className="com-title-section-m">Recetas más leídas</h2>
        </div>
        <div className="banner --desktop --large"></div>
      </div>
    </div>
  );
}

export default Container;
