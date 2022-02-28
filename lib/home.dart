import 'dart:async';
import 'package:flutter/material.dart';
import 'package:collection/collection.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

  final List<Block> _blocks = [];
  int _emptyIndex = 0;
  bool _isPlaying = false;
  int _moves = 0;
  int _secconds = 0;
  String _imgSelected = 'pikachu';

  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _onSelectedImage();
  }

  void _onSelectedImage({String? image}){
    if(image != null) {
      _imgSelected = image;
    }

    var _shuffles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    _blocks.clear();
    for (int i = 0; i < _shuffles.length; i++) {
      _blocks.add(Block(rightIndex: i,
          currentIndex: _shuffles[i],
          alignment: _getBlockAlignment(_shuffles[i])));
    }
    setState(() {
    });
  }

  void _onStart() {
    _isPlaying = true;

    var _shuffles = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    _shuffles.shuffle();
    _shuffles.insertAll(0, [0, 1, 2, 3, 4]);

    _blocks.clear();
    for (int i = 0; i < _shuffles.length; i++) {
      _blocks.add(Block(rightIndex: i,
          currentIndex: _shuffles[i],
          alignment: _getBlockAlignment(_shuffles[i])));
    }

    setState(() {
    });

    _timer = Timer.periodic(
      const Duration(seconds: 1),
          (Timer timer) {
            setState(() {
              _secconds ++;
            });
      },
    );
  }

  void _onStop(){
      _isPlaying = false;
      _secconds = 0;
      _moves = 0;
      _emptyIndex = 0;
      _onSelectedImage();
      //start timer
      if(_timer != null){
        _timer!.cancel();
      }
  }

  Alignment _getBlockAlignment(int currentIndex){
    return Alignment(0.668 * (currentIndex % 4) - 1, 0.5 * (currentIndex ~/ 4) - 1);
  }

  void _onBlockMove(Block block){
    var oldIndex = block.currentIndex;
    block.currentIndex = _emptyIndex;
    block.alignment = _getBlockAlignment(_emptyIndex);
    _emptyIndex = oldIndex;
    _moves++;
  }

  void _onBlockPressed(Block block){
    if (!_isPlaying){
      return;
    }

    //row
    if(block.currentIndex ~/ 4 == _emptyIndex ~/ 4){
      if (block.currentIndex > _emptyIndex) {
        while (block.currentIndex > _emptyIndex){
          _onBlockMove(_blocks.firstWhere((e) => e.currentIndex == _emptyIndex + 1));
        }
        setState(() {});
      }
      else{
        while (block.currentIndex < _emptyIndex){
          _onBlockMove(_blocks.firstWhere((e) => e.currentIndex == _emptyIndex - 1));
        }
        setState(() {});
      }
    }
    //column
    else if (block.currentIndex % 4 == _emptyIndex % 4) {
      if (block.currentIndex > _emptyIndex) {
        while (block.currentIndex > _emptyIndex){
          _onBlockMove(_blocks.firstWhere((e) => e.currentIndex == _emptyIndex + 4));
        }
        setState(() {});
      }
      else{
        while (block.currentIndex < _emptyIndex && !(_emptyIndex == 4 && block.currentIndex == 0)){
          _onBlockMove(_blocks.firstWhere((e) => e.currentIndex == _emptyIndex - 4));
        }
        if(_emptyIndex == 4 && block.currentIndex == 0){
          block.currentIndex = 4;
          block.alignment = _getBlockAlignment(4);
          _emptyIndex = 0;
          _moves ++;
        }
        setState(() {});
      }
    }

    //check winning
    _onCheckComplete();
  }

  void _onCheckComplete() async {
    if (_blocks.firstWhereOrNull((e) => e.rightIndex != e.currentIndex) == null) {
      var secconds = _secconds;
      var moves = _moves;
      _onStop();
      await showDialog(
        context: context,
        builder: (ctx) => AlertDialog(
          title: Text('You are winner', style: TextStyle(color: Colors.black,  fontSize: 20, fontWeight: FontWeight.bold),),
          content: SizedBox(
            height: 50,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Moves: $moves', style: TextStyle(color: Colors.black,  fontSize: 16)),
                SizedBox(height: 5,),
                Text('Time:    ${secconds~/60} : ${secconds%60 < 10 ? '0' : ''}${secconds%60}', style: TextStyle(color: Colors.black,  fontSize: 16)),
              ],
            ),
          ),
          actions: [
              TextButton(
              child: const Text('OK'),
              onPressed: () => Navigator.pop(context, true),
            ),
          ],
        )
      );
    }
  }

  Widget _blockItem(int index){
    var item = _blocks[index];
    return AnimatedAlign(
        alignment: item.alignment,
        curve: Curves.fastOutSlowIn,
        duration: const Duration(milliseconds: 250),
        child: [0,1,2,3].contains(index) ? const SizedBox(
          width: 80,
          height: 80,
        ) : TextButton(
          onPressed: () => _onBlockPressed(item),
          style: TextButton.styleFrom(
            padding: EdgeInsets.zero,
            primary: Colors.grey,
          ),
          child: Container(
            width: 80, height: 80,
            decoration: BoxDecoration(
                border: Border.all(color: Colors.transparent, width: 0.2)
            ),
            child: Opacity(opacity: _isPlaying ? 1 : 0.2, child: Image.asset('assets/images/$_imgSelected/p${index-3}.jpg', width: 80, height: 80, fit: BoxFit.fill,)),
          ),
        )
    );
  }

 Widget _blockPanel(){
    return SizedBox(
      width: 340,
      height: 420,
      child: Stack(
        children: [
          Align(
            alignment: Alignment.bottomCenter,
            child: Container(
              width: 340, height: 340,
              decoration: BoxDecoration(
                  color: Color(0xffE9F0F6),
                  border: Border.all(color: Colors.white, width: 10)
              ),
            ),
          ),
          Align(
            alignment: Alignment.topLeft,
            child: Container(
              width: 100, height: 90,
              decoration: const BoxDecoration(
                color: Color(0xffE9F0F6),
                border:  Border(
                  left: BorderSide(color: Colors.white, width: 10),
                  top: BorderSide(color: Colors.white, width: 10),
                  right: BorderSide(color: Colors.white, width: 10),
                )
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(10),
            child: Stack(
              children: List.generate(_blocks.length, (index) => _blockItem(index)),
            ),
          ),
        ],
      ),
    );
  }

  Widget _gameInfoPanel(){
    return SizedBox(
      height: 420,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Image.asset('assets/images/pokemon.png', height: 60, fit: BoxFit.fitHeight,),
          Image.asset('assets/images/puzzle.png', height: 60, fit: BoxFit.fitHeight,),
          SizedBox(height: 10,),
          Row(
            children: [
              SizedBox(width: 80, child: Text('Moves', style: TextStyle(color: Colors.white,  fontSize: 20, fontWeight: FontWeight.bold),)),
              Text('$_moves', style: TextStyle(color: Colors.orangeAccent,  fontSize: 20, fontWeight: FontWeight.bold),),
            ],
          ),
          SizedBox(height: 10,),
          Row(
            children: [
              SizedBox(width: 80, child: Text('Time', style: TextStyle(color: Colors.white,  fontSize: 20, fontWeight: FontWeight.bold),)),
              Text('${_secconds~/60} : ${_secconds%60 < 10 ? '0' : ''}${_secconds%60}', style: TextStyle(color: Colors.orangeAccent,  fontSize: 20, fontWeight: FontWeight.bold),),
            ],
          ),
          Expanded(child: SizedBox()),
          TextButton(
            onPressed: () => _isPlaying ? _onStop() : _onStart(),
            style: TextButton.styleFrom(
              primary: Colors.grey,
              padding: EdgeInsets.zero,
            ),
            child: Container(
              width: 200,
              height: 50,
              decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: <Color>[
                      Colors.orangeAccent,
                      Colors.red
                    ],
                  ),
                  border: Border.all(color: Colors.white, width: 2),
                borderRadius: BorderRadius.all(Radius.circular(10))
              ),
              child: Center(child: Text(_isPlaying ? 'Stop' : 'Start', style: TextStyle(color: Colors.white,  fontSize: 20, fontWeight: FontWeight.bold),)),
            ),
          )
        ],
      ),
    );
  }

  Widget _imgItem(String image){
    return SizedBox(
      width: 60,
      child: TextButton(
          onPressed: () => _isPlaying ? null :  _onSelectedImage(image: image),
          style: TextButton.styleFrom(
            primary: Colors.grey,
            padding: EdgeInsets.zero,
          ),
          child: Opacity(opacity: _isPlaying ? 0.5 : 1, child: Image.asset('assets/images/$image/$image.jpg', width: 60, height: 60,))),
    );
  }

  Widget _imagePane(){
    return SizedBox(
      height: 420,
      width: 200,
      child: Column(
        children: [
          SizedBox(height: 80,),
          Container(
              decoration: BoxDecoration(
                  border: Border.all(color: Colors.white, width: 5)
              ),
              child: Image.asset('assets/images/$_imgSelected/$_imgSelected.jpg', width: 200, height: 200, fit: BoxFit.fill,)),
          Expanded(child: SizedBox()),
          Text('Choose an image', style: TextStyle(color: Colors.white,  fontSize: 20),),
          SizedBox(height: 10,),
          Column(
            children: [
              Row(
                children: [
                  _imgItem('pikachu'),
                  SizedBox(width: 10,),
                  _imgItem('squirtle'),
                  SizedBox(width: 10,),
                  _imgItem('eevee'),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.grey,
        body: Container(
          width: double.infinity,
          height: double.infinity,
          decoration: BoxDecoration(
              image: DecorationImage(
                image: const AssetImage('assets/images/background.jpg'),
                colorFilter: ColorFilter.mode(Colors.black.withOpacity(0.5), BlendMode.darken),
                fit: BoxFit.fill,
              ),
            ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _gameInfoPanel(),
              SizedBox(width: 70,),
              _blockPanel(),
              SizedBox(width: 70,),
              _imagePane(),
            ],
          ),
        )
    );
  }
}


class Block{
  int rightIndex;
  int currentIndex;
  Alignment alignment;

  Block({
    required this.rightIndex,
    required this.currentIndex,
    required this.alignment,
  });
}