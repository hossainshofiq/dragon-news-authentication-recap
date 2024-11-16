// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import { FaArrowCircleLeft } from "react-icons/fa";

const NewsDetails = () => {
    const data = useLoaderData();
    // console.log(data);
    const news = data.data[0];
    console.log(news)
    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h2 className="font-semibold mb-3">Dragon News</h2>
                    <div className="card bg-base-100 shadow-xl border">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{news.title} </h2>
                            <p>{news.details} </p>
                            <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`} className="btn btn-secondary"><FaArrowCircleLeft></FaArrowCircleLeft> Back to Category</Link>
                            </div>
                        </div>
                    </div>

                </section>

                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;