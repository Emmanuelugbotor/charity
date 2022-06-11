import repData from "./data";
export default function Representative() {
  return (
    <section className="teams">
      <h1>
        MEET OUR TEAM And <span>Representatives</span>
      </h1>
      <ul>
        {repData.map((item, index) => {
          return (
            <li key={index}>
              <div className="image">
                <img src={item?.image} alt="" />
                <div className="social">
                  <ul>
                    {item.socials.map((x, y) => {
                      return (
                        <li key={y}>
                          <x.icon1 />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="description">
                <p className="name">{item.name}</p>
                <div className="field">{item.field}</div>
                <span className="location">{item.location}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
