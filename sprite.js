function Sprite() {
  this.x = 100;
  this.y = 100;
  this.w = 20;
  this.h = 30;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.ang = 0;
  this.vang = 0;
  this.acel = 0;
  this.cor = "grey";
  this.imunidade = 0;
  this.vento = 50;
}

Sprite.prototype.desenhar = function (ctx) {
  /*if(this.imunidade > 0){
    ctx.fillStyle = 'rgba(255, 255, 0, '+Math.cos(20*Math.PI*this.imunidade)+')';
    ctx.strokeStyle = 'hsla(255,255,255, 0.3)';
  } else {
    ctx.fillStyle = this.cor;
    ctx.strokeStyle = 'white';
  }*/
  ctx.fillStyle = this.cor;
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  //ctx.save();
  //ctx.translate(this.x, this.y);
  //ctx.save();
  //ctx.rotate(this.ang*Math.PI/180);
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(this.x + this.w/2, this.y - this.h);
  ctx.lineTo(this.x + this.w, this.y);
  ctx.lineTo(this.x, this.y);
  //ctx.closePath();
  ctx.fill();
  ctx.stroke();
  //ctx.restore();
  /*if(this.debug){
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 1;
    ctx.strokeRect(-this.w/2, -this.h/2, this.w, this.h);
  //ctx.fillRect(-this.w/2, -this.h/2, this.w, this.h);
  }*/
  //ctx.restore();
}

Sprite.prototype.mover = function (dt) {
    //this.ang = this.ang + this.vang*dt;

    this.vx = this.vx + this.ax*dt;
    this.vy = this.vy + (G+this.ay)*dt;

    this.x = this.x + this.vx*dt;
    this.y = this.y + this.vy*dt;

 
    //this.imunidade = this.imunidade - 1*dt;
}

Sprite.prototype.moverAng = function (dt) {
    this.ang = this.ang + this.vang*dt;

    this.ax = this.acel*Math.cos(this.ang*Math.PI/180);
    this.ay = this.acel*Math.sin(this.ang*Math.PI/180);

    this.vx = this.vx + this.ax*dt;
    this.vy = this.vy + (G+this.ay)*dt;

    this.x = this.x + this.vx*dt;
    this.y = this.y + this.vy*dt;

 
    this.imunidade = this.imunidade - 1*dt;
}

Sprite.prototype.perseguir = function (alvo){
  this.ax = 0.5*(alvo.x - this.x) - 0.9*this.vx;
  this.ay = 0.5*(alvo.y - this.y) - 0.9*this.vy;
}

Sprite.prototype.impoeLimites = function(x, y, w, h){
  if(this.x < x){
    this.x = x;
    this.vx = 0;
  }
  if(this.x + this.w > x + w){
    this.x = x + w - this.w;
    this.vx = 0;
  }
  if(this.y - this.h< y){
    this.y = 0 + this.h;
    this.vy = 0;
  }
  if(this.y > y + h){
    this.y = y + h;
    this.vy = 0;
  }
};

Sprite.prototype.colidiuCom = function (alvo) {
  if(alvo.x+alvo.w < this.x) return false;
  if(alvo.x > this.x+this.w) return false;
  if(alvo.y+alvo.h < this.y) return false;
  if(alvo.y > this.y+this.h) return false;
  return true;
};
