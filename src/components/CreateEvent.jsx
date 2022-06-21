import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./signin.css";
import axios from "axios";
import Header from "./Header"
import {useNavigate} from "react-router-dom"

const schema = yup.object().shape({
  eventName: yup.string().required("Event name is a required field"),
  description: yup.string().required("Description is a required field"),
  eventDate: yup.string().required("Event date is a required field"),
  startTime: yup.string().required(" Start Time is a required field"),
  endTime: yup.string().required("End Time is a required field"),
  location: yup.string().required("Location is a required field"),
  category: yup.string().required("Category is a required field"),
  bannerPicture: yup.string()
});

const CreateEvent = () => {
    const [image,setImage] = useState()
    const navigate =useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  console.log(errors);
  const onSubmit = (e) => {
    console.log(e);
    let dd={...e,image}
    console.log(dd);

    axios
      .post("http://localhost/alleventapi/api/event/createEvent.php", dd)
      .then((res) => {
        console.log(res);
        alert("Event created successfully")
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTime = (e) => {
    console.log(e);
  };

  const onFileChange = (e) => {
    let files = e.target.files;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);
    console.log(files);
    fileReader.onload = (event) => {
      setImage(event.target.result);
    };
  };

  return (
    <><Header />
    <div className="createEventContainer">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mt-2">
          <label>Event Name</label>
          <br />
          <input
            {...register("eventName")}
            className="form-control input-sm"
            type="text"
          />
          <p className="text-warning">{errors.eventName?.message}</p>
        </div>
        <div className="form-group mt-2">
          <label>Description</label>
          <br />
          <textarea
            {...register("description")}
            className="form-control input-sm"
            type="text"
          />
          <p className="text-warning">{errors.description?.message}</p>
        </div>
        <div className="form-group mt-2">
          <label>Category</label>
          <br />
          <input
            {...register("category")}
            className="form-control input-sm"
            type="text"
          />
          <p className="text-warning">{errors.category?.message}</p>
        </div>

        <div className="form-group mt-2">
          <label>Location</label>
          <br />
          <textarea
            {...register("location")}
            className="form-control input-sm"
            type="text"
          />
          <p className="text-warning">{errors.location?.message}</p>
        </div>

        <div className="form-group mt-2">
          <label>Upload Banner</label>
          <br />
          <input
            {...register("bannerPicture")}
            className="form-control input-sm"
            type="file"
            onChange={onFileChange}
            accept="image/png, image/gif, image/jpeg"
          />
          <p className="text-warning">{errors.bannerPicture?.message}</p>
        </div>

        <div className="d-flex justify-content-between">
          <div className="form-group mt-2">
            <label>Event Date</label>
            <br />
            <input
              {...register("eventDate")}
              className="form-control input-sm"
              type="date"
            />
            <p className="text-warning">{errors.eventDate?.message}</p>
          </div>
          <div className="form-group mt-2">
            <label>Start Time</label>
            <br />
            <input
              {...register("startTime")}
              onChange={(time) => getTime(time)}
              className="form-control input-sm"
              type="time"
            />
            <p className="text-warning">{errors.startTime?.message}</p>
          </div>
          <div className="form-group mt-2">
            <label>End Time</label>
            <br />
            <input
              {...register("endTime")}
              className="form-control input-sm"
              type="time"
            />
            <p className="text-warning">{errors.endTime?.message}</p>
          </div>
        </div>

        <div className="d-flex mt-4">
          <button type="submit" className="btn createEventBtn btn-sm">
            Create
          </button>
        </div>
      </form>
    </div>
    
</>
  );
};

export default CreateEvent;
