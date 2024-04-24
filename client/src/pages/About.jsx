import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Footer from '../components/Footer';

const About = () => {
  const data = [
    { name: 'Jan', sales: 4000, leads: 2400 },
    { name: 'Feb', sales: 3000, leads: 1398 },
    { name: 'Mar', sales: 2000, leads: 9800 },
    { name: 'Apr', sales: 2780, leads: 3908 },
    { name: 'May', sales: 1890, leads: 4800 },
    { name: 'Jun', sales: 2390, leads: 3800 },
    { name: 'Jul', sales: 3490, leads: 4300 },
    { name: 'Aug', sales: 4000, leads: 2400 },
    { name: 'Sep', sales: 3000, leads: 1398 },
    { name: 'Oct', sales: 2000, leads: 9800 },
    { name: 'Nov', sales: 2780, leads: 3908 },
    { name: 'Dec', sales: 1890, leads: 4800 },
  ];

  const cityPrices = [
    { city: 'Delhi', price: 150000 },
    { city: 'Noida', price: 120000 },
    { city: 'Gurugram', price: 180000 },
    { city: 'Bangalore', price: 200000 },
    { city: 'Kolkata', price: 100000 },
    { city: 'Pune', price: 130000 },
    { city: 'Mumbai', price: 250000 },
  ];
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO',
      photo: 'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Tech Lead',
      photo: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png',
    },
    {
      id: 3,
      name: 'Mark Johnson',
      role: 'Marketing Director',
      photo: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Robinson',
      rating: 5,
      previousExperience: 'Bought a family home in 2021',
      review: 'I had a wonderful experience working with this agency. They understood exactly what I was looking for in a home and helped me find the perfect one. The entire process was smooth and stress-free. Highly recommended!',
    },
    {
      id: 2,
      name: 'Mrs Smith',
      rating: 4,
      previousExperience: 'Rented an apartment in 2022',
      review: 'I recently rented an apartment through this agency and was impressed by their professionalism and efficiency. The agent was attentive to my needs and made the process hassle-free. Overall, a great experience!',
    },
    {
      id: 3,
      name: 'Mr Clark',
      rating: 5,
      previousExperience: 'Sold a property in 2020',
      review: 'I\'ve worked with this agency on multiple occasions, both buying and selling properties. They have always exceeded my expectations with their exceptional service and expertise. I highly recommend them to anyone in need of real estate assistance!',
    },
  ];
  
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-yellow-500" viewBox="0 0 24 24"><path d="M12 2c-.2 0-.4 0-.5.1L9.3 6 4 6.5c-1.1.1-1.6 1.4-.9 2.2l3.3 3-1 4.7c-.2 1.2.8 2.2 2 2.2.6 0 1.1-.3 1.4-.8L12 14.5l3.2 2c.3.4.8.7 1.4.7 1.2 0 2.2-1 2-2.2l-1-4.7 3.3-3c.7-.7.2-2-.9-2.1L14.8 6l-2.3-3.9c-.1-.1-.3-.1-.5-.1zm0 2.4L14 6.7l-.6 3.1 2.6 2.4-3.4.5-1.3 3.2.7-3.3-3.2-1.8L12 4.4z"/></svg>);
      } else {
        stars.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-gray-300" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/></svg>);
      }
    }
    return stars;
  };
  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Welcome to Our Real Estate Platform</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
             
Welcome to our real estate agency, where your dream of finding the perfect home becomes a reality. With a diverse range of properties available for both buying and renting, we are dedicated to helping you discover a place that truly feels like home. Whether you're searching for a cozy apartment in the heart of the city, a spacious family home in the suburbs, or an elegant mansion with breathtaking views, our team of experienced agents is here to guide you every step of the way. We understand that finding the right property is not just about square footage and amenities; it's about finding a space where you can create lasting memories and build the life you've always imagined. At our agency, we pride ourselves on our commitment to exceptional service, integrity, and professionalism. Let us help you find your perfect home and embark on your next chapter with confidence
            </p>
          </section>
  
          <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Sales and Leads Analytics</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} dot={{ fill: '#8884d8' }} />
                  <Line type="monotone" dataKey="leads" stroke="#82ca9d" strokeWidth={2} dot={{ fill: '#82ca9d' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>
  
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Price Comparison in Different Cities</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={cityPrices}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="city" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} dot={{ fill: '#8884d8' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <img src={member.photo} alt={member.name} className="mx-auto mb-4 rounded-full h-40 w-50" />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
        <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">Client Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white shadow-lg p-6 rounded-lg hover:translate-y-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="font-semibold">{testimonial.name}</span>
                <span className="ml-2 text-gray-500">{testimonial.previousExperience}</span>
              </div>
              <div className="flex">
                {renderRating(testimonial.rating)}
              </div>
            </div>
            <p className="text-gray-700">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
