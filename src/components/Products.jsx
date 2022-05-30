import React,{useState,useEffect} from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import { Grid, GridItem } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import axios from "axios";


const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
   
  const [list,setList]=useState([]);

    useEffect(()=>{
      getData();
    },[]);

    const getData=async()=>{
      let res=await axios.get("http://localhost:8080/products");
      let data=res.data;
      setList(data)
    }

  // useEffect(()=>{
  //   fetch("http://localhost:8080/products")
  //   .then((r)=>r.json)
  //   .then((d)=>{
  //     setList(d)
  //   })
    
  // },[])
  

  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct/>
      <Grid templateColumns='repeat(5, 1fr)' gap={6} marginTop={150}>{/* List of Products */}
      {list.map((e)=>(
        <Product key={e.id} {...e}/>
      ))}
      </Grid>
      {/* Pagination */}
      <Pagination/>
    </Flex>
  );
};

export default Products;
