import CakesList from "../components/CakesList"

export default function CakesListPage() {
    const  cakesArray = [
        {
            id: 1,
            name: "Chocolate Cake",
            price: 12.99,
            description: "A delicious chocolate cake",
            image: "https://thefirstyearblog.com/wp-content/uploads/2015/11/Chocolate-Chocolate-Cake-8.jpg"        
        },
        {
            id: 2,
            name: "Vanilla Cake",
            price: 13.99,
            description: "A delicious vanilla cake",
            image: "https://hips.hearstapps.com/hmg-prod/images/cake-recipes-made-from-scratch-1645566207.jpeg?crop=1.00xw:0.513xh;0,0.156xh&resize=1200:*"
        },
        {
            id: 3,
            name: "Strawberry Cake",
            price: 15.99,
            description: "A delicious strawberry cake",
            image: "https://hips.hearstapps.com/hmg-prod/images/wdy050121lifeoftheparty-003-1621611282.jpg?crop=0.998xw:0.337xh;0,0.276xh&resize=1200:*"
        },
        {
            id: 4,
            name: "Valentine Cake",
            price: 14.99,
            description: "A delicious red Cherry cake",
            image: "https://i.etsystatic.com/11883553/r/il/0d52c3/3974631298/il_794xN.3974631298_bn1i.jpg"
        },
        {
            id: 5,
            name: "Rainbow Cake",
            price: 10.99,
            description: "A delicious rainbow cake",
            image: "https://image.winudf.com/v2/image/Y29tLnNpbXBsZWNha2VkZWNvcmF0aW9uaWRlYXMuZ2hvY2tfc2NyZWVuXzBfMTUyMzI5NzY5Nl8wODc/screen-0.webp?fakeurl=1&type=.webp"
        },
        {
            id: 6,
            name: "Lemon Cake",
            price: 12.99,
            description: "A delicious lemon cake",
            image: "https://preppykitchen.com/wp-content/uploads/2016/08/Funfetti-original-redo-close.jpg"
        }
    ]
    return (
        <div className="cakes-div">
            {cakesArray.map((cake) => {
                return <CakesList key={cake.id} id={cake.id} name={cake.name} price={cake.price} description={cake.description} image={cake.image} />
            }
            )}
        </div>
    )
}