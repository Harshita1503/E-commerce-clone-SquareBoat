# E-commerce-clone-SquareBoat
This is the e-commerce webapp which the basic objective of selling goods online. The features that this webapp contains are :- 

●	Login 

●	Register 

●	View items 

●	Add item to cart

●	Add shipping address

●	Add payment details

●	Move to checkout page

●	Place order

The backend of this project consists of 5 APIs. They are:
'register/'

'login/'

'products/'

'address/'

'cart/'


●	These API are connected to the frontend using axios.

●	The 'register/' api and 'login/' api are POST apis that takes data from register and login forms in frontend and sends it to the register and login model in backend

●	The register model contains fields email, name, phone no., and password, while the login model contains email and password.

●	The products api is a GET api which is used to fetch all the products data from the database in backend and then shows that data in our webapp's product screen

●	This product screen has the option to view all the products and their details and move them to cart by clicking  on add to cart button. And on clicking on a single product the user can see a detailed view of the product.

●	When an item is added to cart then the data of that item is stored in the cart model in backend using cart api which is a POST api

●	Also we have a delete api to delete the item from the cart.

●	When proceeding towards the checkout page from the cart page, we have the option to enter the shipping address which is stored in the database using address api which is a post api.

●	We also have a screen to enter the payments details. When the payment details are entered the order gets placed giving a confirmation.


Link to demo video : https://drive.google.com/file/d/1K3jfNOMZ_1xSH1yRQQy5AxmD7UWye2Ex/view?usp=share_link
