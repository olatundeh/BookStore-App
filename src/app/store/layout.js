export const metadata = {
    title: "BookStore - Buy and rent books online",
    description: "An online bookstore where you can buy and rent books.",
}

export default function BookStoreLayout({ children }) {
    return (
        <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center">
            <div className="flex flex-wrap p-2 justify-center">
                {children}
            </div>
        </div>
    )
}