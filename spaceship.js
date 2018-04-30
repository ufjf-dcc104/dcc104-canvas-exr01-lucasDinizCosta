function Spaceship() {
  this.x = 100;
  this.y = 100;
  this.w = 20;
  this.h = 30;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.acel = 0;
  this.cor = "grey";
  this.vento = 50;
  this.pontos = 0;
  this.vidas = 3;
  this.energia = 100;
}

Spaceship.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.cor;
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(this.x + this.w/2, this.y - this.h);
  ctx.lineTo(this.x + this.w, this.y);
  ctx.lineTo(this.x, this.y);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

Spaceship.prototype.mover = function (dt) {

    this.vx = this.vx + (this.ax - this.vento)*dt;
    this.vy = this.vy + (G+this.ay)*dt;

    this.x = this.x + this.vx*dt;
    this.y = this.y + this.vy*dt;

}

Spaceship.prototype.impoeLimites = function(x, y, w, h){
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

Spaceship.prototype.colidiuCom = function (alvo) {
  if(alvo.x+alvo.w < this.x) return false;
  if(alvo.x > this.x+this.w) return false;
  if(alvo.y+alvo.h < this.y) return false;
  if(alvo.y > this.y) return false;
  return true;
};
