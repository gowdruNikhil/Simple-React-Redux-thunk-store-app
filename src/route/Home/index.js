import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsList } from "../../redux/actions/getAllCoins";
import Header from '../../components/Headers';
import  Lists  from '../../components/Lists';

// Functional Componetn
const Home = () => {
    const dispatch = useDispatch();
    
    //subscribe to store
    const data = useSelector((state) => state.posts.postsList);

    //life cycle methods
    useEffect(() => {
      getAllPostsData();
    },[]);


  //methods
    const getAllPostsData = () => {
      dispatch(getAllPostsList());
    };

    return (
      <>
      {/* Reusable Components */}
      <Header />
      <Lists data={data}/>
      </>
    )
}

export default Home