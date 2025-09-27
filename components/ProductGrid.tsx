"use client"

import { useEffect, useState } from "react"
import HomeTabBar from "./HomeTabBar";
import { motion, AnimatePresence } from "motion/react";
import { productType } from "@/constants/Data";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedTab, SetSelectedTab] = useState(productType[0]?.title || "");

    const query = `*[_type == "product" && variant == $variant] | order(name asc){
  ...,"categories": categories[]->title
}`;
    const params = { variant: selectedTab.toLowerCase() };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await client.fetch(query, params);
                console.log(response);
                /*    setProducts(await response); */
            } catch (error) {
                console.log("Product fetching Error", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [selectedTab]);

    return (
        <div>
            <HomeTabBar selectedTab={selectedTab} onTabSelect={SetSelectedTab} />{
                loading ? (
                    <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
                        <motion.div>
                            <Loader2 />
                            <span>Products is Loading.........</span>
                        </motion.div>
                    </div>
                ) : (
                    <>products</>
                )
            }
        </div>
    );

}

export default ProductGrid