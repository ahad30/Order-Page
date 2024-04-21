import PropTypes from 'prop-types'

const OrderDetails = ({product}) => {
// console.log(product)
const {image,description ,price , category , quality  , stock , size , color , title } = product;

  return (

    <div className="flex">
     
     <div className='w-[50%] space-y-4'>
              <img src={image} alt="" className='w-[450px] h-[500px]'/>
              <p> <span className='font-bold'>Price: </span>${price}</p>
              <p className='mt-5 text-justify'>{description}</p>
     </div>

    <div className="flow-root  w-[50%]">
     <dl className="-my-3 space-y-3 divide-y divide-gray-100 text-sm">
   

    <div className=" py-3">
  <h1 className='font-bold text-3xl'>{title}</h1>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Occupation</dt>
      <dd className="text-gray-700 sm:col-span-2">Guitarist</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Salary</dt>
      <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Salary</dt>
      <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Salary</dt>
      <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
    </div>
    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Salary</dt>
      <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Bio</dt>
      <dd className="text-gray-700 sm:col-span-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
        doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
        aspernatur neque molestiae labore aliquam soluta architecto?
      </dd>
    </div>
  </dl>
    </div>
   
   </div>
  )
}

OrderDetails.propTypes = {
 product : PropTypes.object.isRequired
}

export default OrderDetails;