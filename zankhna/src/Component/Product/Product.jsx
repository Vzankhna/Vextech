import React, { useContext } from 'react';
import './Product.scss';
import { FaRegHeart } from "react-icons/fa";
import MyContext from '../../Common/Context/MYcontext';
import { useParams } from 'react-router-dom';

const Prc = () => {
    const { data, value = '', setValue, matchnavigate } = useContext(MyContext);
    const { product } = useParams();

    const onChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <div className="search">
                <input type="text" placeholder="Search Items" onChange={onChange} />
            </div>
            <div className="product-listing">
                {
                    data
                    .filter(o => o.product_category_route === product)
                        // .filter((Item) => {
                        //     const searchTerm = value.toLowerCase();
                        //     const courseName = Item.product_category.toLowerCase();
                        //     return (
                        //         searchTerm &&
                        //         courseName &&
                        //         courseName.startsWith(searchTerm)
                        //     );
                        // })
                        // .map((Item) => (
                        //     <div key={Item.id}>
                        //         <span>
                        //             {Item.product_category}
                        //         </span>
                        //     </div>
                        // ))
                        
                        .map((o) =>{
                            return(
                                <>
                                {
                                    o.product_container.map((i)=>{
                                        return(
                                            <div className="product-container">
                                                <div className="img">
                                                    <div className="symbol">
                                                        <span><FaRegHeart /></span>
                                                    </div>
                                                    <img src={i.img} alt="" onClick={() => matchnavigate(o.product_category_route, i.product_route)} />
                                                </div>
                                                <div className="content">
                                                    <span>{i.name}</span>
                                                    <div className="price">
                                                    <span>{i.price}</span>
                                                    <span>{i.deleted_price}</span>
                                                    <button>Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                </>
                            )
                        })

                }
            </div>
        </>
    );
}

export default Prc;
