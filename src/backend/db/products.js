import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
      _id: uuid(),
      name: "CSK Jersy ",
      description:"Official Match Jersy Of Chennai Super Kings",
      price: 1299,
      team: 'csk',
      catagory: 'jersy',
      rating: 4.8,
      discount: 25,
      src: '../../assets/images/csk/jersy.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "DC Jersy ",
      description:"Official Match Jersy Of Delhi Capitals",
      price: 1999,
      team: 'dc',
      catagory: 'jersy',
      rating: 4.8,
      discount: 20,
      src: '../../assets/images/dc/jersy.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "GT Jersy ",
      description:"Official Match Jersy Of Gujrat Titans",
      price: 1499,
      team: 'gt',
      catagory: 'jersy',
      rating: 4.8,
      discount: 15,
      src: '../../assets/images/gt/jersy.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "KKR Jersy ",
      description:"Official Match Jersy Of Kolkata Knight R_iders",
      price: 2000,
      team: 'kkr',
      catagory: 'jersy',
      rating: 4.8,
      discount: 25,
      src: '../../assets/images/kkr/jersy.png',
      featured: true
  },
  {
      _id: uuid(),
      name: "LSG Jersy ",
      description:"Official Match Jersy Of Lucknow Super Giants",
      price: 1849,
      team: 'lsg',
      catagory: 'jersy',
      rating: 4.8,
      discount: 20,
      src: '../../assets/images/lsg/jersy.png',
      featured: false
  },
  {
      _id: uuid(),
      name: "MI Jersy ",
      description:"Official Match Jersy Of Mumbai Indians",
      price: 1379,
      team: 'mi',
      catagory: 'jersy',
      rating: 4.8,
      discount: 18,
      src: '../../assets/images/mi/jersy.png',
      featured: false
  },
  {
      _id: uuid(),
      name: "PBKS Jersy ",
      description:"Official Match Jersy Of Punjab Kings",
      price: 1879,
      team: 'pbks',
      catagory: 'jersy',
      rating: 4.8,
      discount: 25,
      src: '../../assets/images/pbks/jersy.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "RCB Jersy ",
      description:"Official Match Jersy Of Royal Challengers Bangalore",
      price: 1500,
      team: 'rcb',
      catagory: 'jersy',
      rating: 4.8,
      discount: 30,
      src: '../../assets/images/rcb/jersy.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "RR Jersy ",
      description:"Official Match Jersy Of Rajasthan Royals",
      price: 1399,
      team: 'rr',
      catagory: 'jersy',
      rating: 4.8,
      discount: 25,
      src: '../../assets/images/rr/jersy.jpg',
      featured: true
  },
  {
      _id: uuid(),
      name: "SRH Jersy ",
      description:"Official Match Jersy Of Sunrisers Hyderabad",
      price: 1897,
      team: 'srh',
      catagory: 'jersy',
      rating: 4.8,
      discount: 25,
      src: '../../assets/images/srh/jersy.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "CSK Cap ",
      description:"Official Cap of Chennai Super Kings",
      price: 299,
      team: 'csk',
      catagory: 'cap',
      rating: 3,
      discount: 15,
      src: '../../assets/images/csk/cap.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "CSK Mask ",
      description:"Official Mask Of Chennai Super Kings",
      price: 169,
      team: 'csk',
      catagory: 'mask',
      rating: 4,
      discount: 10,
      src: '../../assets/images/csk/mask.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "DC Cap ",
      description:"Official Cap of Delhi Capitals",
      price: 249,
      team: 'dc',
      catagory: 'cap',
      rating: 3.8,
      discount: 15,
      src: '../../assets/images/dc/cap.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "DC Mask ",
      description:"Official Mask Of Delhi Capitals",
      price: 199,
      team: 'dc',
      catagory: 'mask',
      rating: 4.5,
      discount: 10,
      src: '../../assets/images/dc/mask.jpg',
      featured: true
  },
  {
      _id: uuid(),
      name: "GT Cap ",
      description:"Official Cap of Gujrat Titans",
      price: 299,
      team: 'gt',
      catagory: 'cap',
      rating: 4.2,
      discount: 15,
      src: '../../assets/images/gt/cap.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "GT Mask ",
      description:"Official Mask Of Gujrat Titans",
      price: 149,
      team: 'gt',
      catagory: 'mask',
      rating: 4.8,
      discount: 10,
      src: '../../assets/images/gt/mask.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "KKR Cap ",
      description:"Official Cap of Kolkata Knight R_iders",
      price: 249,
      team: 'kkr',
      catagory: 'cap',
      rating: 4.8,
      discount: 15,
      src: '../../assets/images/kkr/cap.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "KKR Mask ",
      description:"Official Mask Of Kolkata Knight R_iders",
      price: 160,
      team: 'kkr',
      catagory: 'mask',
      rating: 4,
      discount: 10,
      src: '../../assets/images/kkr/mask.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "LSG Cap ",
      description:"Official Cap of Lucknow Super Giants",
      price: 269,
      team: 'lsg',
      catagory: 'cap',
      rating: 3.5,
      discount: 15,
      src: '../../assets/images/lsg/cap.jpg',
      featured: true
  },
  {
      _id: uuid(),
      name: "LSG Mask ",
      description:"Official Mask Of Lucknow Super Giants",
      price: 119,
      team: 'lsg',
      catagory: 'mask',
      rating: 4.5,
      discount: 10,
      src: '../../assets/images/lsg/mask.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "MI Cap ",
      description:"Official Cap of Mumbai Indians",
      price: 280,
      team: 'mi',
      catagory: 'cap',
      rating: 4.2,
      discount: 15,
      src: '../../assets/images/mi/cap.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "MI Mask ",
      description:"Official Mask Of Mumbai Indians",
      price: 110,
      team: 'mi',
      catagory: 'mask',
      rating: 4.9,
      discount: 10,
      src: '../../assets/images/mi/mask.png',
      featured: false
  },
  {
      _id: uuid(),
      name: "PBKS Cap ",
      description:"Official Cap of Punjab Kings",
      price: 279,
      team: 'pbks',
      catagory: 'cap',
      rating: 4.5,
      discount: 15,
      src: '../../assets/images/pbks/cap.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "PBKS Mask ",
      description:"Official Mask Of Punjab Kings",
      price: 154,
      team: 'pbks',
      catagory: 'mask',
      rating: 3.6,
      discount: 10,
      src: '../../assets/images/pbks/mask.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "RCB Cap ",
      description:"Official Cap of Royal Challengers Bangalore",
      price: 249,
      team: 'rcb',
      catagory: 'cap',
      rating: 4.9,
      discount: 15,
      src: '../../assets/images/rcb/cap.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "RCB Mask ",
      description:"Official Mask Of Royal Challengers Bangalore",
      price: 149,
      team: 'rcb',
      catagory: 'mask',
      rating: 4,
      discount: 10,
      src: '../../assets/images/rcb/mask.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "RR Cap ",
      description:"Official Cap of Rajasthan Royals",
      price: 289,
      team: 'rr',
      catagory: 'cap',
      rating: 4,
      discount: 15,
      src: '../../assets/images/rr/cap.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "RR Mask ",
      description:"Official Mask Of Rajasthan Royals",
      price: 115,
      team: 'rr',
      catagory: 'mask',
      rating: 3.6,
      discount: 10,
      src: '../../assets/images/rr/mask.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "SRH Cap ",
      description:"Official Cap of Sunrisers Hyderabad",
      price: 200,
      team: 'srh',
      catagory: 'cap',
      rating: 4.3,
      discount: 15,
      src: '../../assets/images/srh/cap.jpg',
      featured: false
  },
  {
      _id: uuid(),
      name: "SRH Mask ",
      description:"Official Mask Of Sunrisers Hyderabad",
      price: 109,
      team: 'srh',
      catagory: 'mask',
      rating: 4.9,
      discount: 10,
      src: '../../assets/images/srh/mask.jpg',
      featured: false
  },
]