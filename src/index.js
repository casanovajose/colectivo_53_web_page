import React from "react";
import ReactDOM from "react-dom";
// import a from "react-html-parser";
import data from "./data.json";
import "./style.css";

const Gallery = ({info}) => {
  return (
    <div className="carousel-inner" role="listbox">
      {info.pictures.map((picture) => {
        return (
          <div key={picture} className="carousel-item">
            <img className="d-block img-fluid  m-auto" src={require(`./img/${picture}`)} alt="First slide" />
          </div>
        );
      })}
      <a className="carousel-control-prev" href="#carouselExampleControls<?php echo $w; ?>" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls<?php echo $w; ?>" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

const Work = ({info}) => {
  return (
    <div className="col-md-8 col-sm-12 offset-md-1 py-3 px-2 works" id={info.slug} >
      <h2>{info.title}</h2>
      <p><i>{info.year} - {info.type}</i> </p>
      <p>{info.text1}</p>
      <Gallery info={info} />
    </div>
  );
}

ReactDOM.render(
  <>
  {console.log(data)}
  {
    data.works.map((work) => {
      return (<Work key={work.slug} info={work} />);
    })
  }  
  </>
  , document.querySelector("#root")
)

{/* </div>
foreach($content['works'] as $work): ?>
      <div class="col-md-8 col-sm-12 offset-md-1 py-3 px-2 works" id="<?php echo $work['slug']; ?>">
        <h2><?php echo $work['title']; ?></h2>
        <p><i><?php echo $work['year']; ?> - <?php echo $work['type']; ?></i> </p>
        <p><?php echo $work['text-1']; ?></p>

        <div id="carouselExampleControls<?php echo $w; ?>" class="carousel slide py-3" data-ride="carousel">
          <ol class="carousel-indicators">
              <?php for( $i = 0; $i < count($work['pictures']); $i++): ?>
              <li data-target="#carouselExampleIndicators" data-slide-to="0" <?php echo $i == 0?'class="active"':''; ?>></li>
            <?php endfor; ?>
          </ol>

    <div class="carousel-inner" role="listbox">
      <?php
      $i = 0;
      foreach($work['pictures'] as $pic): ?>
      <div class="carousel-item <?php echo $i == 0?' active ':''; ?>">
        <img class="d-block img-fluid  m-auto" src="img/<?php echo $pic; ?>" alt="First slide">
      </div>
      <?php
      $i++;
      endforeach; ?>
    </div>

    <a class="carousel-control-prev" href="#carouselExampleControls<?php echo $w; ?>" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls<?php echo $w; ?>" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
     <?php if( !empty($work['text-2']) ): ?>
     <p><?php echo $work['text-2']; ?></p>
     <?php endif; ?>
     <?php if( !empty($work['notes']) ): ?>
     <small class="notes"><?php echo $work['notes']; ?></small>
     <?php endif; ?>
       <div class="mt-4 separator">
       </div>
      </div>
      <?php
    $w++;
    endforeach; ?> */}