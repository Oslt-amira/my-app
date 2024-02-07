"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import styles from "./page.module.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function MoviesPage() {
  const [Movies, setMovies] = useState([]);
  const options = { method: "GET", headers: { accept: "application/json" } };


  const fetchMovies = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    };
  
    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
      const data = await response.json();
      setMovies(data.results);
      console.log(Movies);
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {  fetchMovies();
  }, []);

  return (
    <div className=" md:flex  p-5  ">
      <div className="overflow-x-auto">
      {Movies.map(movie => (
        <Card key={movie}>
         <CardContent>
            
         </CardContent>
        </Card>
      ))}
    </div>

    </div>
  );
}
