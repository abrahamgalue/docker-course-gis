var sketchProc = function (processingInstance) {
  with (processingInstance) {
    size(600, 600);
    frameRate(60);
    smooth();

    var Deadpool = (function () {
      Deadpool = function () {
        this.timer = 0;
        this.speed = 3;
        this.colors = {
          head: color(211, 61, 64),
          body: color(186, 54, 57),
          dark: color(35, 35, 35),
          light: color(245, 245, 245),
        };
      };
      Deadpool.prototype = {
        draw: function () {
          pushMatrix();
          translate(10, 0);
          translate(300, 600);
          rotate(radians(sin(radians(this.timer * this.speed)) * 8));
          translate(-300, -600);

          pushStyle();
          //swords
          //left
          pushMatrix();
          translate(192, 80);
          translate(90, 420);
          rotate(radians(45 + sin(radians(this.timer - 15) * this.speed) * 25));
          translate(-90, -420);

          noStroke();
          fill(this.colors.dark);
          rect(80, 165, 24, 480, 5);
          rect(70, 290, 44, 9, 5);
          //diamonds on handle
          fill(140, 137, 140, 100);
          for (var i = 0; i < 7; i++) {
            quad(
              92,
              168 + i * 17,
              99,
              175 + i * 17,
              92,
              182 + i * 17,
              83,
              175 + i * 17
            );
          }
          popMatrix();

          //right
          pushMatrix();
          translate(192, 80);
          translate(90, 420);
          rotate(
            radians(-45 + sin(radians(this.timer - 15) * this.speed) * 25)
          );
          translate(-90, -420);

          noStroke();
          fill(this.colors.dark);
          rect(80, 165, 24, 480, 5);
          rect(70, 290, 44, 9, 5);
          //diamonds on handle
          fill(140, 137, 140, 100);
          for (var i = 0; i < 7; i++) {
            quad(
              92,
              168 + i * 17,
              99,
              175 + i * 17,
              92,
              182 + i * 17,
              83,
              175 + i * 17
            );
          }
          popMatrix();

          pushMatrix();
          translate(348, 486);
          rotate(radians(sin(radians(this.timer - 20) * this.speed) * 10));
          translate(-348, -486);

          //left arm
          noFill();
          stroke(this.colors.body);
          strokeWeight(30);
          bezier(348, 486, 420, 386, 438, 273, 387, 146);

          //left hand
          pushMatrix();
          translate(387, 146);
          rotate(radians(sin(radians(this.timer - 20) * this.speed) * 120));
          translate(-387, -146);

          noStroke();
          fill(this.colors.dark);
          beginShape();
          vertex(343, 155);
          bezierVertex(338, 142, 337, 133, 339, 121);
          bezierVertex(330, 103, 322, 86, 331, 76);
          bezierVertex(346, 66, 356, 80, 360, 96);
          bezierVertex(360, 95, 364, 94, 367, 93);
          bezierVertex(367, 82, 363, 63, 375, 58);
          bezierVertex(393, 53, 395, 73, 395, 93);
          bezierVertex(396, 94, 397, 95, 400, 96);
          bezierVertex(403, 82, 406, 64, 420, 67);
          bezierVertex(434, 70, 432, 85, 430, 101);
          bezierVertex(424, 135, 424, 151, 408, 166);
          bezierVertex(396, 174, 382, 175, 368, 175);
          bezierVertex(356, 186, 342, 193, 333, 185);
          bezierVertex(325, 171, 335, 164, 343, 155);
          endShape(CLOSE);
          popMatrix();
          popMatrix();

          pushMatrix();
          translate(220, 486);
          rotate(radians(sin(radians(this.timer - 20) * this.speed) * 15));
          translate(-220, -486);

          //right arm
          noFill();
          stroke(this.colors.body);
          strokeWeight(30);
          bezier(220, 486, 142, 378, 147, 249, 208, 146);

          //right hand
          pushMatrix();
          translate(208, 146);
          rotate(
            radians(-50 + sin(radians(this.timer - 20) * this.speed) * 120)
          );
          translate(-208, -146);

          noStroke();
          fill(this.colors.dark);
          beginShape();
          vertex(244, 158);
          bezierVertex(250, 149, 251, 136, 248, 125);
          bezierVertex(259, 99, 262, 84, 251, 77);
          bezierVertex(237, 74, 229, 85, 227, 101);
          bezierVertex(223, 99, 221, 97, 218, 96);
          bezierVertex(219, 80, 220, 69, 210, 62);
          bezierVertex(188, 60, 189, 77, 190, 97);
          bezierVertex(190, 99, 188, 100, 186, 101);
          bezierVertex(182, 88, 181, 74, 166, 75);
          bezierVertex(154, 79, 152, 87, 156, 104);
          bezierVertex(160, 138, 166, 162, 185, 174);
          bezierVertex(198, 180, 209, 181, 223, 179);
          bezierVertex(233, 187, 246, 197, 256, 189);
          bezierVertex(264, 180, 258, 167, 244, 158);
          endShape(CLOSE);
          popMatrix();
          popMatrix();

          //body
          noStroke();
          fill(this.colors.body);
          beginShape();
          vertex(195, 640);
          vertex(195, 485);
          vertex(240, 430);
          vertex(325, 430);
          vertex(370, 485);
          vertex(370, 640);
          endShape(CLOSE);

          noStroke();
          fill(this.colors.dark);
          arc(240, 480, 96, 100, radians(180), radians(270));
          rect(192, 479, 48, 12);

          arc(325, 480, 96, 100, radians(270), radians(360));
          rect(325, 479, 48, 12);

          beginShape();
          vertex(195, 595);
          vertex(304, 430);
          vertex(324, 430);
          vertex(195, 625);
          endShape(CLOSE);

          pushMatrix();
          translate(285, 365);
          rotate(radians(sin(radians(this.timer - 15) * this.speed) * 15));
          translate(
            sin(radians(this.timer * this.speed)) * 30,
            sin(radians(this.timer * this.speed)) * 5
          );
          translate(-285, -365);

          //shadow under head
          fill(40, 40);
          ellipse(285, 375, 215, 255);

          //head
          fill(this.colors.head);
          ellipse(285, 365, 240, 240);

          //eyes
          fill(this.colors.dark);
          ellipse(230, 360, 97, 115);
          ellipse(340, 360, 97, 115);

          //eyeballs
          fill(this.colors.light);
          ellipse(240, 360, 33, 30);
          ellipse(330, 360, 33, 30);

          fill(this.colors.dark);
          ellipse(240, 370, 38, 25);
          ellipse(330, 370, 38, 25);

          popMatrix();
          popStyle();
          popMatrix();

          this.timer++;
        },
      };
      return Deadpool;
    })();

    var Scene = (function () {
      Scene = function () {
        this.page = "load";
        this.images = undefined;
        this.imageIndex = 0;
        this.loaded = false;
        this.deadpool = new Deadpool();
        this.setup();
      };
      Scene.prototype = {
        setup: function () {
          this.images = {
            back: function () {
              background(245, 200, 80);
              stroke(52, 53, 54, 5);
              strokeWeight(4);

              for (var i = 0; i < 600; i += 10) {
                line(-10, random(i - 45, i + 45), 610, random(i - 45, i + 45));
              }

              stroke(255, 15);
              strokeWeight(1);
              for (var i = 0; i < 1000; i++) {
                line(
                  random(-50, width + 50),
                  random(-50, height + 50),
                  random(-50, width + 50),
                  random(-50, height + 50)
                );
              }

              return get(0, 0, width, height);
            },
            heading: function () {
              background(0, 0);

              stroke(0);
              fill(255);
              beginShape();
              vertex(47, 41);
              vertex(104, 41);
              vertex(112, 61);
              vertex(112, 122);
              vertex(106, 137);
              vertex(53, 138);
              vertex(53, 72);
              vertex(48, 72);
              endShape(CLOSE);

              beginShape();
              vertex(124, 43);
              vertex(166, 43);
              vertex(167, 71);
              vertex(139, 72);
              vertex(138, 80);
              vertex(156, 81);
              vertex(158, 101);
              vertex(139, 102);
              vertex(139, 109);
              vertex(165, 110);
              vertex(166, 137);
              vertex(122, 138);
              vertex(116, 120);
              vertex(117, 60);
              endShape(CLOSE);

              beginShape();
              vertex(186, 41);
              vertex(221, 42);
              vertex(240, 139);
              vertex(218, 139);
              vertex(215, 130);
              vertex(195, 129);
              vertex(192, 137);
              vertex(171, 138);
              endShape(CLOSE);

              beginShape();
              vertex(237, 43);
              vertex(295, 42);
              vertex(303, 59);
              vertex(303, 121);
              vertex(297, 137);
              vertex(244, 138);
              vertex(243, 71);
              vertex(237, 70);
              endShape(CLOSE);

              beginShape();
              vertex(307, 43);
              vertex(363, 42);
              vertex(372, 60);
              vertex(372, 98);
              vertex(365, 116);
              vertex(338, 117);
              vertex(337, 134);
              vertex(315, 136);
              vertex(315, 71);
              vertex(307, 70);
              endShape(CLOSE);

              beginShape();
              vertex(382, 42);
              vertex(425, 42);
              vertex(433, 58);
              vertex(434, 124);
              vertex(427, 138);
              vertex(384, 139);
              vertex(377, 125);
              vertex(377, 59);
              endShape(CLOSE);

              beginShape();
              vertex(446, 44);
              vertex(485, 42);
              vertex(494, 57);
              vertex(496, 125);
              vertex(489, 136);
              vertex(446, 137);
              vertex(438, 125);
              vertex(438, 56);
              endShape(CLOSE);

              beginShape();
              vertex(500, 42);
              vertex(520, 42);
              vertex(520, 109);
              vertex(551, 109);
              vertex(552, 136);
              vertex(504, 138);
              vertex(501, 121);
              endShape(CLOSE);

              fill(0);
              beginShape();
              vertex(267, 73);
              vertex(278, 74);
              vertex(279, 105);
              vertex(268, 105);
              endShape(CLOSE);

              beginShape();
              vertex(199, 105);
              vertex(204, 82);
              vertex(211, 106);
              endShape(CLOSE);

              beginShape();
              vertex(338, 74);
              vertex(350, 74);
              vertex(351, 86);
              vertex(338, 86);
              endShape(CLOSE);

              beginShape();
              vertex(399, 74);
              vertex(411, 73);
              vertex(412, 106);
              vertex(400, 107);
              endShape(CLOSE);

              beginShape();
              vertex(460, 75);
              vertex(473, 74);
              vertex(473, 106);
              vertex(460, 107);
              endShape(CLOSE);

              beginShape();
              vertex(77, 75);
              vertex(90, 76);
              vertex(90, 105);
              vertex(78, 105);
              endShape(CLOSE);

              var headingShape = get(0, 0, width, height);

              fill(150, 36, 28);
              rect(0, 0, width, height);

              var headingBack = get(0, 0, width, height);

              headingShape.mask(headingBack);

              return headingShape;
            },
          };
        },
        load: function (s) {
          var obj = Object.keys(this.images);
          this.images[obj[this.imageIndex]] =
            this.images[obj[this.imageIndex]]();
          this.imageIndex++;

          background(245, 200, 80);
          pushStyle();
          fill(240, 30);
          textAlign(CENTER, CENTER);
          textSize(40);
          text("LOADING", 300, 300);
          noFill();
          stroke(240, 30);
          strokeWeight(10);
          arc(
            300,
            300,
            300,
            300,
            0,
            radians(map(this.imageIndex / obj.length, 0, 1, 0, 360))
          );
          strokeWeight(1);
          popStyle();

          if (this.imageIndex < obj.length) {
            this.loaded = false;
          } else {
            this.loaded = true;
            this.page = s;
          }
        },
        go: function () {
          image(this.images.back, 0, 0);
          image(this.images.heading, 0, 0);
          this.deadpool.draw();
        },
      };
      return Scene;
    })();

    var scene = new Scene();

    draw = function () {
      background(245, 200, 80);

      switch (scene.page) {
        case "load":
          scene.load("go");
          break;
        case "go":
          scene.go();
          break;
      }
    };
  }
};

var canvas = document.getElementById("canvas");
var processingInstance = new Processing(canvas, sketchProc);
