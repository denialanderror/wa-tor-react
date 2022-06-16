import React, { Fragment } from 'react'
import './PlayingPiece.css'

const sharks = [
  'm103 50c-6.6 3.12-15.91 13.35-19 20l-14-7.7c-6.6-2.4-15.21-1.79-22 0-4.1 0.81-8.53 1.1-11 4.7 12.08 3.42 18.06 8.86 25.09 19 1.43 2.07 5.38 6.19 5.44 8.42 0.07 2.32-6.03 12.84-7.42 15.58-4.14 8.11-5.21 12.99-5.11 22 0.14 12.38 5.8 23.95 17 29.96 8.06 4.32 8.25 0.66 22 9.04 0 0-3-5-3-5 16.87 4.55 26.11 12.72 35 16-1.92-5.2-4.51-8.77-8.43-12.7-1.81-1.82-6.27-4.93-7.06-6.95l0.96-12.35c0.13-3.63-0.81-4.93-2.47-8l-2.21 6-4.79 13c-5.6-0.52-14.39-4.42-15.62-10.58-0.27-1.31 0.32-3.12 0.62-4.42l-7-1c0.37-16.55 11.59-22.26 20-34 11.04 9.33 25.37 12.3 31 27 4.61-8.06-1.65-26.59-6.27-34-1.67-2.68-6.77-7.85-7.15-10-0.43-2.46 1.92-5.09 3.22-7 3.11-4.57 6.8-10.08 9.2-15 3.69 1.83 5.91 2.8 8.73 6.04 2.1 2.42 3.12 5.51 5.49 6.26 3.83 1.19 12.23-5.64 14.59-8.39 1.4-1.62 2.56-3.23 1.31-5.32-0.92-1.52-4.68-3.56-8.59-8.59-4.91-6.3-9.05-16.5-14.62-21.82-5.82-5.54-14.86-8.23-21.91-12.33l-12.99-9.68c-5.14-1.82-13.69 11.59-11.8 15.53 1.18 2.47 4.5 2.38 7.38 5.52 2.01 2.21 4.17 7.84 5.41 10.78z',
  'm93 138c-3.09-16.39-2.83-25.25 3.6-41 1.41-3.44 5.13-11.46 8.5-13.01 3.77-1.73 10.11 3.21 12.9 5.48 4.45 3.61 13.53 12.54 13.98 18.53 0.18 2.47-2.08 7.41-2.98 10 7.11 1.53 7.4 4.42 6.42 11-0.37 2.51-0.56 4.79-2.02 6.96-5.14 7.7-27.3 16.68-34.4 25.04 7.83-0.17 14.72-2.7 22-5.42 2.33-0.87 8.33-3.54 10.58-3.15 2.8 0.49 5.88 4.4 7.5 6.57l11.92 22c3.23-8.81-7.02-26.87-9.24-36-1.43-5.9 1.94-11.32 3.24-17l7 3-4.84-17v-19l7.84 2c-1.91-9.1-6.89-10.78-12.62-16.51l-7.67-10.49c-2.71-3.44-7.78-8.29-7.21-13 0.44-3.67 3.82-7.38 6.52-9.67 6.38-5.43 18.91-9.77 26.98-12.64 4.89-1.74 9.22-2 12-6.69-21.47-1.74-27.2-0.61-48 4.88-6.69 1.77-16.09 4.22-21 9.12-15.15-14.4-41.3-22.74-62-23.91-7.58-0.43-16.55 1.14-14.47 10.91 3.29 15.44 20.81 30.31 33.47 38.46 3.22 2.08 16.96 8.89 18.12 10.81 2.26 3.23-0.06 17.2 0 21.73-0.23 10.05 1.1 17.55 4.58 27 1.95 5.32 3.61 9.24 9.3 11z',
  'm26 154l12.01-14.91 13.58-11.26 3.9-5.07 7.51-1.9 6.59-1.57 7.28 12.71 13.82 19 4.31 15 9-9 16 6.24 12 5.76-1-4c4.31 0 11.32-0.75 15 1.23 8.49 4.59 16.77 18.99 28 21.77l-15.57-21 0.57-11s3 1 3 1l-2-13c-4.62 3.26-8.69 7.75-14 9.87-5.1 2.04-17.03 1.07-19.9-4.26-0.72-1.56-0.27-3.92 0-5.61-6.58-1.43-8.3 0.71-12.1-1.61-7.2-4.4-12.94-15.19-14.38-23.39-0.84-4.78-0.77-9.94 4.43-12.11 6.51-2.72 10.89 0.04 16.95 0.94 0 0 23 3.33 23 3.33l16 5.84c-6.29-17.67-23.94-22.54-40-28.58-3.8-1.42-13.06-3.3-15.28-5.85-2.82-3.25-3.7-16.99-3.72-21.57-0.06-12.69-4.13-30.56-11.63-41-8.15-11.33-16.29-10.96-21.75 2-6.56 15.56-6.65 25.71-6.62 42 0.01 6.73 1.09 13.34 2 20 0.34 2.45 1.47 7.4 0.58 9.58-1.23 2.99-9.38 9.59-12.14 12.42-10.87 11.12-29.23 30.88-25.44 48z',
  'm61 99c8.86-2 9.01-3.15 19-3.15 5.17 0 17.97 0.42 21.39 4.58 2.41 2.93 0.3 10.13-0.52 13.57-2.75 11.46-6.1 25.98-15.87 33.6-4.39 3.23-14.11 6.04-17.83 0-1.31-1.96-1.15-5.2-1.17-7.6l-6 3c-2.89-14.29 5.45-22.11 13-33-8.58 1.35-17.18 5.92-21 14-10.12-7.24-14.97-15.28-28-19l8.09 11s18.91 26 18.91 26l14.04 17.79c10.4 9.35 22.43 8.83 34.96 5.21l2 5c5.77-4.55 4.99-6.37 9.21-10.83l6.49-6.21c10.72-11.98 15.23-25.34 17.3-40.96 10.81 0.91 19.61 6.07 28 12.67 4 3.14 7.34 7.18 12 9.33-2.36-9.94-14.09-27.51-21.17-34.96-6.08-6.41-11.16-7.28-12.64-10.3-1.09-2.23 0.17-7.24 0.54-9.74l2.27-21c0.07-6.56 0.09-16.19-3.23-21.98-1.58-2.77-4.26-5.65-7.77-5.1-3.22 0.51-7.68 4.75-9.83 7.09-7.15 7.81-12.02 18.07-15.48 27.99-1.14 3.28-2.64 12.29-5.12 13.98 0 0-15.57 2.16-15.57 2.16-8.91 1.47-22.06 8.6-26 16.86z',
]

const Shark = ({ entity }) => (
  <Fragment>
    <svg
      className="icon"
      style={{ fill: `rgb(${(entity.id * 30) % 255}, 255, 0` }}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={sharks[entity.id % sharks.length]} />
    </svg>
    <div className="data">
      <div>A:{entity.age}</div>
      <div>L:{entity.lifeforce}</div>
    </div>
  </Fragment>
)

export default Shark
