import {
  GET_ALL_ORDER,
  GET_ALL_ORDER_ERROR,
  GET_ALL_ORDER_SUCCESS,
  GET_BUYER,
  GET_BUYER_ERROR,
  GET_BUYER_SUCCESS,
  GET_COMPLETED,
  GET_COMPLETED_ERROR,
  GET_COMPLETED_SUCCESS,
  GET_SELLER,
  GET_SELLER_ERROR,
  GET_SELLER_SUCCESS,
} from "./orderType";

const initialState = {
  buyer: [],
  seller: [],
  completed: [],
  isLoading: false,
  isError: false,
};

export const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_BUYER: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_SELLER: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_SELLER_SUCCESS: {
      return {
        ...state,
        seller: payload,
        isLoading: false,
        isError: false,
      };
    }
    case GET_BUYER_SUCCESS: {
      return {
        ...state,
        buyer: payload,
        isLoading: false,
        isError: false,
      };
    }
    case GET_SELLER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_BUYER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_COMPLETED: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_COMPLETED_SUCCESS: {
      return {
        ...state,
        completed: payload,
        isError: false,
      };
    }
    case GET_COMPLETED_ERROR: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_ALL_ORDER_SUCCESS:{
      return{
        ...state,
        buyer:payload.filter((el)=>el.type==="buyer"),
        seller:payload.filter((el)=>el.type==="seller"),
        completed:payload.filter((el)=>el.status==="completed"),
        isLoading:false,
        isError:false

      }
    }
    case GET_ALL_ORDER:{
      return{
        ...state,
        isLoading:true
      }
    }
    case GET_ALL_ORDER_ERROR:{
      return{
        ...state,
        isLoading:false,
        isError:true
      }
    }
    default: {
      return state;
    }
  }
};
