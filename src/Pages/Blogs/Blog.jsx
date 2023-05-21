import React from "react";
import Title from "../../Title/Title";

const Blog = () => {
  return (
    <div className="py-5">
      <Title title={"blogs"}/>
        <h3 className="text-4xl text-info text-center">Questions & Answers</h3>
        <div className="px-40 py-12">
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium text-white">
        <span className="text-info">Q1. </span>What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            <strong>Access token :</strong> <br /> An access token is a tiny
            piece of code that contains a large amount of data. Containing
            Information about the user, permissions, groups, and timeframes
          </p>
          <p>
            {" "}
            <strong>Refresh token :</strong> <br /> Refresh token is used to
            generate a new access token
          </p>
          <p>
            {" "}
            <strong>Working procedure :</strong> <br /> After,firebase
            validation user want token from it's server. In general, server give
            two token 1.Access & 2.Refresh token. When we call data from server
            we use access token in Header, then validate & give data by
            server.Access token provide for sort term.when Access is expired
            then server generate access token by refresh token.
          </p>
          <p>
            {" "}
            <strong>Use :</strong> <br /> We should store in HTTPcookie for
            better security.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium text-white">
        <span className="text-info">Q2. </span>Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            <strong>SQL :</strong> <br />
            Relation database.It have fixed schema.This databases are best
            suited for complex queries.
          </p>
          <p>
            {" "}
            <strong>NoSQL :</strong> <br /> Non-relational . It have dynamic
            schema.It is not good for omplex queries.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium text-white">
        <span className="text-info">Q3. </span>What is express js? What is Nest JS ?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            <strong>Express JS :</strong> <br />
            Express JS is a Node.js framework designed to build API's web
            applications cross-platform mobile apps quickly and make node js
            easy.
          </p>
          <p>
            {" "}
            <strong>NestJS :</strong> <br /> NestJS is a open-source framework
            for building efficient, scalable Node.js web applications.It uses
            modern JavaScript & built with TypeScript
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium text-white">
          <span className="text-info">Q4.</span> What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            <strong>Defination :</strong> <br />
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages
          </p>
          <p>
            {" "}
            <strong>Working procedure :</strong> <br />
            When you need to do more complex aggregation, you can use the
            MongoDB aggregation pipeline. Aggregation pipelines are collections
            of stages that, combined with the MongoDB query syntax, will allow
            you to obtain an aggregated result.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Blog;
