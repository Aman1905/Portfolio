import React from 'react'
import styles from './Blogs.module.css'
import BlogData from './BlogData'

const Blog = () => {
  return (
    <>
      <section id={styles.blog}>
        <h2>My Blogs</h2>
        <h3>A simple quote by Dumbledore</h3>

        <div className='container' id={styles.blog__container}>
        {
          BlogData.map((elem) => {
            return (
              <div key={elem.id} className="card sm-3 lg-4" id={styles.hove} style={{ width: '22rem',border:"none" }}>
                <img src={elem.imgsrc} className="card-img-top cd" alt={elem.name} />
                <div className="card-body upper_data" id={styles.blog__data}>
                  <h5 className="card-title mt-2">{elem.name}</h5>
                  <a href={elem.visit} className="btn btn-primary mt-2">Go somewhere</a>
                </div>
              </div>
              )
          } )
        }
        </div>
      </section>
    </>
  )
}

export default Blog

{/* 

                                <div className="card_body">
                                    <div className="upper_data d-flex justify-content-between align-items-center">
                                        <h4 className='mt-2'>{element.rname}</h4>
                                    </div>
                                </div>

                            </Card>               */}