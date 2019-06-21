import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      blog:[
          {
              title:'When to Replace Brakes pads?',
              time:'2018-12-02 18:42:00',
              img:'https://cdn.shopify.com/s/files/1/0047/4221/7841/articles/cr_w__0_h__0_a_cc_300x.jpg?v=1543805193',
              content:'<p>Brake rotors and Brake pads wear out over time. Depends on the brake material we can say how long brakes last, as well as your driving patterns. Brakes perform an important function for the driver; brakes need to be well maintained to work at their best. The brake pads, brake rotor, and brake caliper are the primary components of car disc brake systems. The rotors and brake pads on all cars wear out eventually, but brake wear varies based on a different number of elements that include below.</p>' +
                  '<p>Brake pad hardness: Brake pads are available in various compounds to suit different driving needs. Hard compound brake pads will remain last longer, but usually, brake pads need to be warm before they perform well. Soft compound brake pads give better results at low speeds like in urban areas. Too much heat can melt brake pad compound on to brake rotor and reduce brake performance if the driving of the vehicle gets to the extreme.</p>' +
                  '<p>Driving habits: How hard a driver uses their brakes; it affects how long the brake pads last. Some drivers ride the vehicle and use the brakes hard and stop abruptly, while others gently use the brakes to stop. Gradual braking increases pad lifespan, but it is important to brake instantly when safety calls for it.</p>' +
                  '<p>Environment: Due to traffic and traffic signals, driving in the city is harder on brakes because pressure on brakes is high than driving out in the country or long straight roads because braking required less frequently.</p>' +
                  '<p>Materials：The materials that makeup brake pad and the brake rotor also factor into the brakes’ durability. Ceramic brakes last longer than standard metal brakes. But they need to be more effective and warm. However, carbon-ceramic brakes are extremely expensive and found almost on sports cars which give high-performance. Metal brakes or other Steel are much more common and still more than adequate to suit a variety of driving conditions.</p>' +
                  '<p>Generally, brake pads need to replace after about 40,000 miles to 50,000 miles. Some need to be changed after 25,000 while others can be replaced for 70,000 miles- All things depends on the factors listed above. Other warning signs communicate that the brake pads are wearing out that are listed below</p>' +
                  '<p>Jittery braking-If braking becomes jittery then the rotors become bent or twisted out of shape. Some treatments can either clean or grind the surface of the rotor in order to make it flat. This system is easier, less expensive and safer to just replace the brake rotor.</p>' +
                  '<p>Brake pad thickness- It is necessary to check brake pad thickness regularly. Whenever the oil is changed or tires are rotated. Call the mechanic to take a look at the brake pads.</p>' +
                  '<p>Squealing or scraping noise-Brake pads have small metal wires at the very bottom to let the driver know when they are about to run out of gripe material; when they start to make a squealing noise, replace them.</p>' +
                  '<p>If the brakes look lose performance or worn out, they must be replaced. If there are any noises or sparks coming from the brakes, have them inspected by a mechanic immediately.</p>',
              tags:['brake caliper','brake rotor','ceramic brake pads','disc brake'],
              author:'Bella Wang'
          },
          {
              title:'How to know Symptoms of Bad or Failing Brake Pads',
              time:'2018-11-22 20:30:00',
              img:'https://cdn.shopify.com/s/files/1/0047/4221/7841/articles/91NpzCzcsIL._SY606_300x.jpg?v=1542881570',
              content:'<p>One of the car\'s most important systems may help you to enhance your driving comfort, and you get the best mileage or make your car go faster. All brakes need to have softer friction material mounted to the stronger metal backing plate. Your car uses some highly complex system consists of the cylinder, booster, rotors, friction material, pads, and more. Brake pads are the important component in the braking system which provides the friction to slow down your vehicle. The brake pads are used to stop and slow the wheels. Usually, bad or failing brake pads will give a few symptoms that will alert the driver that the vehicle requires some sort of service.</p>' +
                  '<h4>Noisy Brakes</h4>' +
                  '<p>The most common sign of bad or failing brake pads is noisy brakes. Brake pads can collect dust as they wear, due to this it may cause vibration and squealing when the pedal is applied. Squealing brake pads can be caused by worn pads; metal-on-metal contact between the brake pad backing plate and the rotor, worn pads will produce a scraping sound. When the vehicle is moving forward or when the pedal is depressed, the scraping sound may be audible.</p>' +
                  '<h4>Poor Brake Response</h4>' +
                  '<p>Failing of brake pads can also cause poor quality brake response. If the brake pads have been overheated or severely worn, their capacity makes the vehicle in to slow motion. This occurs during braking situations where the force and heat generated by braking are considered higher. Because the brake pads are the thing that actually slows the vehicle, these brake pads are important to the safety of the vehicle. If the brake pads make noise or may be worn then it is inspected by a professional technician. If necessary they can replace the brake pads for you.</p>' +
                  '' +
                  '',
              tags:[],
              author:'Bella Wang'
          },
          {
              title:'Have us, don\'t be afraid of price',
              time:'2018-10-21 21:01:00',
              img:'https://cdn.shopify.com/s/files/1/0047/4221/7841/articles/Have_us_don_t_be_afraid_of_price_7e544cc3-25f9-4d99-8e7f-6a5816420dd1_300x.jpg?v=1540182691',
              content:'<p>Halloween is coming, thebrakekits.com is a new generation of auto parts e-commerce company, the main Topex brand auto parts brakes, it will also officially open online sales.</p>' +
                  '<p>Since the carnival holiday is coming, we will also benefit consumers with over 40% discount.</p>' +
                  '<p>Friends only need to buy as much as possible, and the rest is handled by us. As long as we can do it, we can enjoy everything, not the only one.</p>' +
                  '<p>Trick or treat, let\'s get up the carnival.</p>' +
                  '<p>Pick up the pumpkin lantern in your hand, put on your happy mask, dress up and go to the Halloween night, forget everything and enjoy the nightly carnival.</p>' +
                  '<p>May Halloween be happy! Take a bow.</p>',
              tags:['Halloween'],
              author:'Bella Wang'
          },
      ]
  },
  mutations: {

  },
  actions: {

  }
})
