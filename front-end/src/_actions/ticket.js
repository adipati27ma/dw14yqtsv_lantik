import { SEARCH_TICKET, SAVE_TICKET } from "../config/constants";
import { API } from "../config/api";

export const searchTicket = value => {
  const { destination, start, dateStart, adult } = value;
  return {
    type: SEARCH_TICKET,
    payload: async () => {
      const res = await API.post("/ticketSearch", {
        dateStart: dateStart,
        startStation: start,
        destinationStation: destination,
        qty: adult
      });
      const { data } = res.data;
      return data;
    }
  };
};

export const addTicket = value => {
  const {
    name,
    classType,
    dateStart,
    startStation,
    startTime,
    destinationStation,
    arrivalTime,
    price,
    qty
  } = value;
  return {
    type: SAVE_TICKET,
    payload: async () => {
      const res = await API.post("/ticket", {
        name,
        classType,
        dateStart,
        startStation,
        startTime,
        destinationStation,
        arrivalTime,
        price,
        qty
      });
      const { data } = res.data;
      return data;
    }
  };
};
