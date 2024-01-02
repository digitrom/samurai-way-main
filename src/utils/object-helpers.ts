import {UserType} from "../api/api";

export const  updateObjectInArray = (items: Array<any>, itemId:string, objPropName: string, newObjProps: Object) => {
   return items.map(u => u[objPropName] === itemId ? {...u, ...newObjProps} : u)
}