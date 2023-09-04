"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./createReducer";
import { easeInOut, motion, useAnimation } from "framer-motion";

// creating the app

function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.post.data);
  const state = useSelector((state) => state.post.status);
  const error = useSelector((state) => state.post.error);

  const [info, setInfo] = useState();
  const [filtered, setFiltered] = useState();

  const anime1 = useAnimation();
  const anime2 = useAnimation();
  const anime3 = useAnimation();
  const anime4 = useAnimation();
  const anime5 = useAnimation();
  const anime6 = useAnimation();
  const anime7 = useAnimation();

  const animesRef = useRef([
    anime1,
    anime2,
    anime3,
    anime4,
    anime5,
    anime6,
    anime7,
  ]);

  // console.log(animesRef.current[0]);

  const [animes, setAnimes] = useState();

  // const filtered = data?.res

  // console.log(filtered);

  useEffect(() => {}, []);

  // console.log(animes);

  // array.map((item, index) => console.log(index));

  const handleFilter = () => {
    const filter = info?.results?.filter(
      (item) => item.primaryImage?.url != null
    );
    setFiltered(filter);
    // const arr = [
    //   "anime1",
    //   "anime2",
    //   "anime3",
    //   "anime4",
    //   "anime5",
    //   "anime6",
    //   "anime7",
    // ];
    // setAnimes(arr[ivalue]);
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    setInfo(data);
    // const complete = info?.results?.filter(
    //   (item) => item.primaryImage?.url != null
    // );
  }, [info, data]);

  const handleAnimation = async () => {
    await anime1.start({
      scale: 0.97,
      transition: {
        ease: easeInOut,
        duration: 0.1,
      },
    });

    await anime1.start({
      scale: 1.1,
      transition: {
        ease: easeInOut,
        duration: 0.1,
      },
    });

    await anime2.start({
      scale: 0.97,
      transition: {
        ease: easeInOut,
        duration: 0.1,
      },
    });

    await anime2.start({
      scale: 1.1,
      transition: {
        ease: easeInOut,
        duration: 0.1,
      },
    });

    await anime3.start({
      scale: 0.97,
      transition: {
        ease: easeInOut,
        duration: 0.1,
      },
    });

    await anime3.start({
      scale: 1.1,
      transition: {
        ease: easeInOut,
        duration: 0.1,
      },
    });

    await anime4.start({
      scale: 0.97,
      transition: {
        ease: easeInOut,
        duration: 0.1,
      },
    });

    await anime4.start({
      scale: 1.1,
      transition: {
        ease: easeInOut,
        duration: 0.1,
      },
    });

    await anime5.start({
      scale: 0.97,
      transition: {
        ease: easeInOut,
        duration: 0.1,
      },
    });

    await anime5.start({
      scale: 1.1,
      transition: {
        ease: easeInOut,
        duration: 0.1,
      },
    });

    await anime6.start({
      scale: 0.97,
      transition: {
        ease: easeInOut,
        duration: 0.1,
      },
    });

    await anime6.start({
      scale: 1.1,
      transition: {
        ease: easeInOut,
        duration: 0.1,
      },
    });

    await anime7.start({
      scale: 0.97,
      transition: {
        ease: easeInOut,
        duration: 0.1,
      },
    });

    await anime7.start({
      scale: 1.1,
      transition: {
        ease: easeInOut,
        duration: 0.1,
      },
    });
  };

  const handleData = () => {
    // console.log(data?.results[0]?.primaryImage?.url);
    // setInfo(data); originalTitleText
    // console.log(info?.results);
  };

  if (state === "Loading") {
    return <h1>Loading</h1>;
  }

  if (state === "error") {
    <h1>An error has occurred: {error}</h1>;
  }

  return (
    <div>
      <h1>The Upcoming Movie Series</h1>

      <div
        style={{
          display: "flex",
          width: "99vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={handleFilter} className="displayBtn">
          Show Upcoming Movie Series
        </button>
      </div>

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr ",
        }}
      >
        {filtered?.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            key={item.id}
            className="card"
            style={{
              borderRadius: "10px",
            }}
          >
            <h4>{item?.originalTitleText.text.slice(0, 15)}</h4>
            <motion.div
              // onClick={() => setAnimes(animes[index])}
              className="imageCover"
              // onMouseOver={() => setAnimes(animes[index])}
            >
              <motion.img
                src={item?.primaryImage?.url}
                initial={{ scale: 1 }}
                onMouseOver={handleAnimation}
                // animate={animes[index + 1]}
                animate={animesRef.current[index]}
              ></motion.img>
            </motion.div>
            <h3>Day:{item?.releaseDate?.day}</h3>
            <h3>Month:{item?.releaseDate?.month}</h3>
            <h3>Year:{item?.releaseDate?.year}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
