import Item from "./Item"
import {Context} from "../App"
import {useContext} from 'react'

function Content() {
  const [data,,loading] = useContext(Context)
  if (loading) return <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">Loading... <div className="loader"></div></section>
  return (
    <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
      {data.map((item, index) => {
        const id = item?._id;
        const subtype7 = item?.subtype == "7";
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const userLang = navigator.language || navigator.userLanguage;
        const properties = {
          date: new Date(item?.display_date).toLocaleDateString(userLang, options),
          name: item?.headlines?.basic,
          image: item?.promo_items?.basic?.url,
          website: item?.website_url,
        }
        return (subtype7 && <Item key={id} {...properties} />)
      })}
    </section>
  );
}

export default Content;
