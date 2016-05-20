export default function() {
  this.post('/users');
  this.get('/users/:id');
  this.put('/users/:id');
  this.del('/users/:id');
}
