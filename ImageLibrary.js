function ImageLibrary(){
  this.images = {};
  this.loaded = 0;
  this.size = 0;
}

ImageLibrary.prototype.load = function (key,url) {
  var img = new Image();
  this.images[key] = img;
  this.size++;
  var that = this;
  img.addEventListener('load', function(){
    that.loaded++;
    console.log(key, "terminou de carregar:", that.loaded,that.size);
  })
  img.src = url;
};

ImageLibrary.prototype.draw = function (ctx, key, x, y) {
  ctx.drawImage(this.images[key], x, y);
};

ImageLibrary.prototype.drawSize = function (ctx, key, x, y, w, h) {
  ctx.drawImage(this.images[key], x, y, w, h);
};

ImageLibrary.prototype.drawAngle = function(ctx, key, x, y, ang){
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(ang*Math.PI/180);
  //ctx.fillStyle = "white";
  //ctx.fillRect(-this.images[key].width/2,-this.images[key].width/2,this.images[key].width,this.images[key].height);
  ctx.drawImage(this.images[key], -this.images[key].width/2, -this.images[key].height/2);
  ctx.restore();
}

ImageLibrary.prototype.drawClip = function(ctx, key, sx, sy, w, h, dx, dy){
  ctx.drawImage(this.images[key], sx, sy, w, h, dx, dy, w, h);
}

ImageLibrary.prototype.drawClipAngle = function(ctx, key, sx, sy, w, h, dx, dy, ang){
  ctx.drawImage(this.images[key], sx, sy, w, h, dx, dy, w, h);
  /*ctx.save();

  ctx.translate(dx, dy);

  ctx.rotate(ang*Math.PI/180);
  ctx.drawImage(this.images[key], -this.images[key].width/2, -this.images[key].height/2, w, h, -this.images[key].width/2, -this.images[key].height/2, w, h);
  //console.log("Foi");
  //ctx.fillStyle = "white";
  //ctx.fillRect(-this.images[key].width/2,-this.images[key].width/2,this.images[key].width,this.images[key].height);
  //ctx.drawImage(this.images[key], , -this.images[key].height/2);
  //ctx.drawImage(this.images[key], -this.images[key].width/2, -this.images[key].height/2, w, h, dx, dy, w, h);

  ctx.restore();*/
}
