import * as actionTypes from "./shopping-types";

const INITIAL_STATE = { //initial state of products
  products: [
    {
      id: 1,
      title: "David The Delicious Monster",
      description:
        "David the delicious monster, GQ magazine once wrote an article about me, the gist being as follows ‘Dave the delicious monster is a popular guy. He has charm and charisma. He is the warren beatty of the plant world. He never ages but is a bit obsessed with his looks and is constantly worried about loosing his good looks. But I am not obsessed.",

      price: 679.0,
      image:
        "https://distinctivespaces.co.za/wp-content/uploads/2024/05/Delicious-Monster-2.jpg",
    },
    {
      id: 2,
      title: "Aramis The Alocasia",
      description:
        "Aramis the alocasia, I’m Aramis and I miss my plant buddies, Dartagnan and porthos. I feel incomplete without them and prefer to be part of a triplet. If you can, please make space for all 3 of us so we can carry on our adventures when you are not home.",

      price: 729.0,
      image:
        "https://distinctivespaces.co.za/wp-content/uploads/2024/05/Alocasia-Veined-1.jpg",
    },
    {
      id: 3,
      title: "Robbie The Roebelini Palm",
      description:
        "Robbie the roebelini palm- I’m a good-looking and clean-cut plant, certain to impress your parents. I’m intelligent and witty too, which makes me a keeper. I tend to get cold easily, so I’m at my happiest when kept in warm and humid conditions.",
      price: 1259.0,
      image:
        "https://distinctivespaces.co.za/wp-content/uploads/2024/08/Robbie-the-Roebelini-1.jpg",
    },
    {
      id: 4,
      title: "Cherry Blossom Tree – Dark Pink",
      description:
        "If you’re looking for a tree to add some greenery to your indoor space, a standard tree might be just what you need. Ideal for smaller areas in offices, homes, or restaurants, these trees are designed to fit in tighter spaces.",
      price: 4869.0,
      image:
        "https://distinctivespaces.co.za/wp-content/uploads/2024/05/Cherry-Blossom-Tree-Dark-Pink-2.jpg",
    },
    {
      id: 5,
      title: "Carrie The White Caladium",
      description:
        "Carrie the white caladium – I’ve been told that I have very pretty leaves. Personally, I don’t know… maybe? What I do know is that I don’t mind being paired up with other plants. I am great company for any companion, easy to talk to, and need little to no maintenance unlike my brother, kyle, the red caladium.",
      price: 539.0,
      image:
        "https://distinctivespaces.co.za/wp-content/uploads/2024/05/Caladium-Green-2.jpg",
    },
    {
      id: 6,
      title: "Double White Orchid In Pot",
      description: "Double white orchid in grey ceramic pot",
      price: 1269.0,
      image:
        "https://distinctivespaces.co.za/wp-content/uploads/2024/05/White-orchids-double-in-pot-1.jpg",
    },
    {
      id: 7,
      title: "Purple Orchid In Glass Vase",
      description: "Purple Orchid In Glass Vase",
      price: 459.0,
      image:
        "https://distinctivespaces.co.za/wp-content/uploads/2024/05/Purple-Orchid-In-Glass-Vase-1.jpg",
    },
  ],
  cart: [], 
  currentItem: null, 
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // get Item data from products array and add to cart
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      //remove item from cart by filtering through items in cart
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      //allowing the client/user to adjust qty in cart
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      //adding current 'open' item to cart- updating state
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
