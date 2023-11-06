import axios from 'axios';

const Home = ({ restaurants, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div>
      {restaurants.data.map(restaurant => (
        <div className={"item"} key={restaurant.id}>{restaurant.attributes.Name}</div>
      ))}
    </div>
  );
};

Home.getInitialProps = async ctx => {

  // let data = ctx.data

  let { data } = ctx
  
  try {
    const res = await axios.get('http://localhost:1337/api/');
    const restaurants = res.data;
    return { restaurants };
  } catch (error) {
    return { error };


let homeData = { data: [1,2,3] }
Home(homeData)

export default Home;
