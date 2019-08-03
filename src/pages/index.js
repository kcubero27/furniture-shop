import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const defaultItems = 5

const IndexPage = () => {
  const [items, setItems] = useState(5)

  const getItems = () => {
    let images = [];

    for (let i = 0; i < items; i++) {
      images.push(
        <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="https://picsum.photos/id/938/200/300" alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 py-4">
        <span
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
          </div>
        </div>,
      )
    }

    return images;
  }

  return (
    <Layout>
      <SEO title="Home"/>
      {getItems()}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setItems(items + defaultItems)}>
        Button
      </button>
    </Layout>
  )
}

export default IndexPage
