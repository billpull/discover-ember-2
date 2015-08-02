export default function(){
  this.transition(
    this.fromRoute('user.index'),
    this.toRoute('user.following'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
	  this.fromRoute('home'),
	  this.toRoute('user'),
	  this.useAndReverse('explode', {
	    matchBy: 'data-profile-image',
	    use: 'fly-to'
	  })
	);
}