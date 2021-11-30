import { TYPE } from "./eventsActions";

export function reducerActions(state, action) {
  switch (action.type) {

    case TYPE.USER_CREATE:{

    }
    case TYPE.USER_UPDATE:{
        
    }
    case TYPE.USER_FIND:{
        
    }
    case TYPE.USER_DELETE:{
        
    }
    case TYPE.BOOK_CREATE:{

    }
    case TYPE.BOOK_UPDATE:{
        
    }
    case TYPE.BOOK_FIND:{
        
    }
    case TYPE.BOOK_DELETE:{
        
    }
    default:
      return state;
  }
}
