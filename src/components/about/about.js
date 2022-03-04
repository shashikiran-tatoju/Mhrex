import React from 'react'
import './about.css'

export default function about() {
  return (
    <div id='about'>
        <section class="section-about">
		<div class="container">
			<div class="row justify-content-center text-center">
				<div class="col-md-10 col-lg-8">
					<div class="header-section">
						<h2 class="title">About <span>Mhrex</span></h2>
						<p class="description">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour</p>
					</div>
				</div>
			</div>
			<div class="row">
			
			
				{/* <!-- Start Single Service --> */}
				<div class="col-md-8 col-lg-7">
					<div class="single-about">
						<div class="part-1">
							<i class="fab fa-asymmetrik"></i>
							<h3 class="title">Express delivery innovative Design service</h3>
						</div>
						<div class="part-2">
							<p class="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
							<a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
						</div>
					</div>
				</div>
				{/* <!-- / End Single Service --> */}
				{/* <!-- Start Single Service --> */}
				{/* <div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="part-1">
							<i class="fas fa-broadcast-tower"></i>
							<h3 class="title">Provide solutions and services to end users</h3>
						</div>
						<div class="part-2">
							<p class="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
							<a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
						</div>
					</div>
				</div> */}
				{/* <!-- / End Single Service --> */}

			</div>
		</div>
	</section>
    </div>
  )
}
