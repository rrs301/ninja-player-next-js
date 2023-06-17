import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Home/Hero'
import Search from '../components/Home/Search'
import GameList from '../components/Home/GameList'
import Posts from '../components/Home/Posts'
import app from '../shared/FirebaseConfig'
import { getFirestore, doc, setDoc, getDoc, 
  collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from 'react'
export default function Home() {

  const db=getFirestore(app);
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    getPost();
  },[])

  const getPost=async()=>{
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
    
   setPosts(posts=>[...posts,doc.data()]);
});
  }

  const onGamePress=async(gameName)=>{
    setPosts([]);
    if(gameName=='Other Games')
    {
      getPost();
      return ;
    }
    const q=query(collection(db,"posts"),
    where("game","==",gameName));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let data=doc.data();
      data.id=doc.id
      setPosts(posts=>[...posts,doc.data()]);
   
});
  }
  
  return (
    <div className='flex flex-col items-center 
    justify-center mt-9'>
      <div className='w-[70%] md:w-[50%] lg:w-[55%]'>
      <Hero/>
        <Search/>
        <GameList onGamePress={onGamePress}/>
      
      </div>
      {posts? <Posts posts={posts}/>:null}
       
    </div>
  )
}
