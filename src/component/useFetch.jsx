import React,{useState,useEffect} from 'react';

const useFetch = (url) => {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(false);

    const fetchdata = () => {
        fetch("https://api.github.com/search/users?q=masai")
        .then((r)=>r.json())
        .then((r)=>{
        setdata(r.items);
        setloading(false);
        })
        .catch((e)=>{
        seterror(true);
        setloading(false);
        })
    };

    useEffect(() => {
        fetchdata();
    }, []);
    console.log(data);

  return {
    data,loading,error
  }
};

export default useFetch;