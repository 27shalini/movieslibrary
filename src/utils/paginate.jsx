import _ from "lodash";

export function Paginate(items, pageNumber, pageSize){
    const statIndex = (pageNumber-1)*pageSize;
    return _(items). slice(statIndex).take(pageSize).value();
}