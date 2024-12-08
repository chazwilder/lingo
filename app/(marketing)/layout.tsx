import React from 'react'
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Props = {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center">
            {children}
            </main>
            <Footer />
            </div>
    )
}
export default MarketingLayout
