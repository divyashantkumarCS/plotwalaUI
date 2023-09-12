let cards = document.querySelector('.cardContaier');

const images = [
    'https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/id/1481643878/photo/american-style-country-house-on-a-striking-summer-day-with-blue-sky-beautiful-residential.webp?b=1&s=170667a&w=0&k=20&c=pyZxFACbZav5mJgLIvW3zdO6a2TLajsgqZkwJMrxAaY=',
    'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.jpg?s=1024x1024&w=is&k=20&c=AZKMyi9tKbOYS5lNCNvRxOfahxo__p_s-Lb8JTXVvqY=',
    'https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/id/1481643878/photo/american-style-country-house-on-a-striking-summer-day-with-blue-sky-beautiful-residential.webp?b=1&s=170667a&w=0&k=20&c=pyZxFACbZav5mJgLIvW3zdO6a2TLajsgqZkwJMrxAaY=',
    'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.jpg?s=1024x1024&w=is&k=20&c=AZKMyi9tKbOYS5lNCNvRxOfahxo__p_s-Lb8JTXVvqY=',
    'https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/id/1481643878/photo/american-style-country-house-on-a-striking-summer-day-with-blue-sky-beautiful-residential.webp?b=1&s=170667a&w=0&k=20&c=pyZxFACbZav5mJgLIvW3zdO6a2TLajsgqZkwJMrxAaY=',
    'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.jpg?s=1024x1024&w=is&k=20&c=AZKMyi9tKbOYS5lNCNvRxOfahxo__p_s-Lb8JTXVvqY=',
    'https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/id/1481643878/photo/american-style-country-house-on-a-striking-summer-day-with-blue-sky-beautiful-residential.webp?b=1&s=170667a&w=0&k=20&c=pyZxFACbZav5mJgLIvW3zdO6a2TLajsgqZkwJMrxAaY=',
    'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.jpg?s=1024x1024&w=is&k=20&c=AZKMyi9tKbOYS5lNCNvRxOfahxo__p_s-Lb8JTXVvqY=',
    'https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/id/1481643878/photo/american-style-country-house-on-a-striking-summer-day-with-blue-sky-beautiful-residential.webp?b=1&s=170667a&w=0&k=20&c=pyZxFACbZav5mJgLIvW3zdO6a2TLajsgqZkwJMrxAaY=',
    'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.jpg?s=1024x1024&w=is&k=20&c=AZKMyi9tKbOYS5lNCNvRxOfahxo__p_s-Lb8JTXVvqY=',
]

for (let i = 0; i < 50; i++) {
    let fetch = document.querySelector('.cardContaier').innerHTML;
    cards.innerHTML =`<div class="card mb-4 rounded-0" style="max-width: 800px;">
                        <div class="row g-0">
                            <div class="col-md-5" style="height:255px; position: relative;" >
                                <img src= ${images[i]} width="100%" height="100%" style="object-fit: cover;" alt="...">
                                <div class="imgText-overlay">
                                    <button type="button" class=" btn btn-success rounded-0 p-0 px-3 py-1" style="position: absolute; top: 10px; left: 10px;"><b>Featured</b></button>
                                    <button type="button" class=" btn btn-danger rounded-0 p-0 px-3 py-1" style="position: absolute; top: 10px; right: 10px;"><b>For Sale</b></button>
                                    <button type="button" class=" btn btn-primary rounded-0 p-0 px-3 py-1" style="position: absolute; bottom: 10px; left: 10px;"><b>Family Home</b></button>
                                </div>
                            </div>
                            <div class="col-md-7 ">
                                <div class="card-body">
                                    <h5 class="card-title pb-2">Real House Luxury Villa</h5>
                                    <div class="card-subtitle pb-md-4" style="font-size: 14px; color:grey;">
                                        <i class="fa-solid fa-location-dot pe-1" style="color: #1ce4f2;"></i> Next To Fame Diagnostics - RK Hegde Nagar, Bangalore - 560077
                                    </div>
                                    <div class="row g-0 pt-3 pt-md-0">
                                        <div class="col-6 pb-3" style="color: grey;">
                                            <i class="fa-solid fa-bed"></i>&nbsp; Bedrooms
                                        </div>
                                        <div class="col-6 pb-3" style="color: grey;">
                                            <i class="fa-solid fa-toilet"></i>&nbsp; Bathrooms
                                        </div>
                                        <div class="col-6 pb-3" style="color: grey;">
                                            <i class="fa-solid fa-toilet"></i>&nbsp; 2720sq ft
                                        </div>
                                        <div class="col-6 pb-3" style="color: grey;">
                                            <i class="fa-solid fa-car"></i>&nbsp; Garages
                                        </div>
                                    </div>
                                    <div class="row imgDetailsSec3">
                                        <div class="col-4 imgDetailsSec3-one" >
                                            $ 2300000
                                        </div>
                                        <div class="col-4 imgDetailsSec3-two">
                                        <a href="#"><i class="fa-solid fa-right-left"></i></a>
                                        <a href="#"><i class="fa-solid fa-share-nodes"></i></a>
                                        <a href="#"><i class="fa-regular fa-heart"></i></i></a>
                                        </div>
                                    </div>
                                <!-- <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> -->
                                </div>
                            </div>
                        </div>
                    </div>`+ fetch;
}