import { FaAngleDown, FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
import { IoAirplane, IoBed } from "react-icons/io5";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { IoMdSwap } from "react-icons/io";
import { FaCalendarDays, FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";

export const AngelDown = ({size, color}) => {
  return (
    <FaAngleDown size={size} color={color} />
  )
}

export const AngleLeft = ({size, color}) => {
  return (
    <FaAngleLeft size={size} color={color} />
  )
}

export const AngleRight = ({size, color}) => {
  return (
    <FaAngleRight size={size} color={color} />
  )
}

export const Airplane = ({size, color}) => {
  return (
    <IoAirplane size={size} color={color} />
  )
}

export const Bed = ({size, color}) => {
  return (
    <IoBed size={size} color={color} />
  )
}

export const PlaneTakeOff = ({size, color}) => {
  return (
    <BiSolidPlaneTakeOff size={size} color={color} />
  )
}

export const Swap = ({size, color}) => {
  return (
    <IoMdSwap size={size} color={color} />
  )
}

export const Calendar = ({size, color}) => {
  return (
    <FaCalendarDays size={size} color={color} />
  )
}

export const Seats = ({size, color}) => {
  return (
    <MdAirlineSeatReclineExtra size={size} color={color} />
  )
}

export const ToggleOff = ({size, color}) => {
  return (
    <FaToggleOff size={size} color={color} />
  )
}

export const ToggleOn = ({size, color}) => {
  return (
    <FaToggleOn size={size} color={color} />
  )
}

export const Discount = ({size, color}) => {
  return (
    <RiDiscountPercentFill size={size} color={color} />
  )
}

export const Star = ({size, color}) => {
  return (
    <FaStar size={size} color={color} />
  )
}