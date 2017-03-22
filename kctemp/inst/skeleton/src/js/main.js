$(window).scroll(function() {
	var re = /arrow_down.png/g; 
	var initoffset_1_1 = $('#1_1').offset();
	var currenttop_1_1 = $(window).scrollTop()+20;
	if (currenttop_1_1 > initoffset_1_1.top) {
		if($("#library_1").html().match(re)){
			$("#library_1").html($("#library_1").html().replace("arrow_down.png","arrow_up.png"))
			$("#library_1").parent().next().fadeIn("2500")
		}
		$(".lanmu-list a").removeClass("current")
		$("#library_seq_1").addClass("current");
	}
	var initoffset_1_2 = $('#1_2').offset();
	var currenttop_1_2 = $(window).scrollTop()+20;
	if (currenttop_1_2 > initoffset_1_2.top) {
		$(".lanmu-list a").removeClass("current")
		$("#library_seq_2").addClass("current");
	}
	var initoffset_1_3 = $('#1_3').offset();
	var currenttop_1_3 = $(window).scrollTop()+20;
	if (currenttop_1_3 > initoffset_1_3.top) {
		$(".lanmu-list a").removeClass("current")
		$("#library_seq_3").addClass("current");
	}
	var initoffset_1_4 = $('#1_4').offset();
	var currenttop_1_4 = $(window).scrollTop()+20;
	if (currenttop_1_4 > initoffset_1_4.top) {
		$(".lanmu-list a").removeClass("current")
		$("#library_seq_4").addClass("current");
	}
	var initoffset_2 = $('#pipline').offset();
	var currenttop_2 = $(window).scrollTop()+100;
	if (currenttop_2 > initoffset_2.top) {
		$(".lanmu-list a").removeClass("current")
		$("#analyses_pip").addClass("current");
	}
	
	var initoffset_3_1 = $('#'+1).offset();
	var currenttop_3_1 = $(window).scrollTop()+100;
	if (currenttop_3_1 > initoffset_3_1.top) {
		if($("#result_3").html().match(re)){
			$("#result_3").html($("#result_3").html().replace("arrow_down.png","arrow_up.png"))
			$("#result_3").parent().next().fadeIn("2500")
		}
		$(".lanmu-list a").removeClass("current")
		$("#result_rawdata").addClass("current");
	}
	var initoffset_3_2 = $('#'+2).offset();
	var currenttop_3_2 = $(window).scrollTop()+100;
	if (currenttop_3_2 > initoffset_3_2.top) {
		$(".lanmu-list a").removeClass("current")
		$("#result_data_quality").addClass("current");
	}	
	var initoffset_3_3 = $('#'+3).offset();
	var currenttop_3_3 = $(window).scrollTop()+120;
	if (currenttop_3_3 > initoffset_3_3.top) {
		$(".lanmu-list a").removeClass("current")
		$("#result_ref_compare").addClass("current");
	}	
	var initoffset_3_4 = $('#'+4).offset();
	var currenttop_3_4 = $(window).scrollTop()+100;
	if (currenttop_3_4 > initoffset_3_4.top) {
		$(".lanmu-list a").removeClass("current")
		$("#result_known_miRNA").addClass("current");
	} 
	var initoffset_3_5 = $('#'+5).offset();
	var currenttop_3_5 = $(window).scrollTop()+100;
	if (currenttop_3_5 > initoffset_3_5.top) {
		$(".lanmu-list a").removeClass("current")
		$("#result_ncRNA").addClass("current");
	} 
	
	var initoffset_3_6 = $('#'+6).offset();
	var currenttop_3_6 = $(window).scrollTop()+100;
	if (currenttop_3_6 > initoffset_3_6.top) {
		$(".lanmu-list a").removeClass("current")
		$("#result_repeat_seq").addClass("current");
	} 
	
	
	
	var initoffset_3_7 = $('#'+7).offset();
	var currenttop_3_7 = $(window).scrollTop()+100;
	if (currenttop_3_7 > initoffset_3_7.top) {
		$(".lanmu-list a").removeClass("current")
		$("#result_exon_intron").addClass("current");
	} 
	
	var initoffset_3_8 = $('#'+8).offset();
	var currenttop_3_8 = $(window).scrollTop()+100;
	if (currenttop_3_8 > initoffset_3_8.top) {
		$(".lanmu-list a").removeClass("current")
		$("#result_new_miRNA").addClass("current");
	} 
	
	var initoffset_3_10 = $('#'+9).offset();
	var currenttop_3_10 = $(window).scrollTop()+100;
	if (currenttop_3_10 > initoffset_3_10.top) {
		$(".lanmu-list a").removeClass("current")
		$("#result_calssfication").addClass("current");
	}
	
	var initoffset_3_11 = $('#'+10).offset();
	var currenttop_3_11 = $(window).scrollTop()+100;
	if (currenttop_3_11 > initoffset_3_11.top) {
		$(".lanmu-list a").removeClass("current")
		$("#result_base_edit").addClass("current");
	}
	
	
	var initoffset_3_12 = $('#'+11).offset();
	var currenttop_3_12 = $(window).scrollTop()+100;
	if (currenttop_3_12 > initoffset_3_12.top) {
		$(".lanmu-list a").removeClass("current")
		$("#result_family_analysis").addClass("current");
	}
	
	
	
	var initoffset_3_13 = $('#'+12).offset();
	var currenttop_3_13 = $(window).scrollTop()+100;
	if (currenttop_3_13 > initoffset_3_13.top) {
		$(".lanmu-list a").removeClass("current")
		$("#result_exp").addClass("current");
	}
	
	
	
	var initoffset_3_14 = $('#'+13).offset();
	var currenttop_3_14 = $(window).scrollTop()+100;
	if (currenttop_3_14 > initoffset_3_14.top) {
		$(".lanmu-list a").removeClass("current")
		$("#result_target").addClass("current");
	}
	
	
	
	var initoffset_3_15 = $('#'+14).offset();
	var currenttop_3_15 = $(window).scrollTop()+100;
	if (currenttop_3_15 > initoffset_3_15.top) {
		$(".lanmu-list a").removeClass("current")
		$("#result_enrich").addClass("current");
	}
	
	var initoffset_4 = $('#reference_html').offset();
	var currenttop_4 = $(window).scrollTop()+100;
	if (currenttop_4 > initoffset_4.top) {
		$(".lanmu-list a").removeClass("current")
		$("#reference").addClass("current");
	}
	var initoffset_5_1 = $('#note_1').offset();
	var currenttop_5_1 = $(window).scrollTop()+100;
	if (currenttop_5_1 > initoffset_5_1.top) {
		if($("#note").html().match(re)){
			$("#note").html($("#note").html().replace("arrow_down.png","arrow_up.png"))
			$("#note").parent().next().fadeIn("2500")
		}
		$(".lanmu-list a").removeClass("current")
		$("#note_file_list").addClass("current");
	}
	var initoffset_5_2 = $('#note_2').offset();
	var currenttop_5_2 = $(window).scrollTop()+140;
	if (currenttop_5_2 > initoffset_5_2.top) {
		$(".lanmu-list a").removeClass("current")
		$("#note_soft_list").addClass("current");
	}
	var initoffset_5_3 = $('#note_3').offset();
	var currenttop_5_3 = $(window).scrollTop()+20;
	if (currenttop_5_3 > initoffset_5_3.top) {
		$(".lanmu-list a").removeClass("current")
		$("#note_methon_en").addClass("current");
	}
	var initoffset_5_4 = $('#note_4').offset();
	var currenttop_5_4 = $(window).scrollTop()+20;
	if (currenttop_5_4 > initoffset_5_4.top) {
		$(".lanmu-list a").removeClass("current")
		$("#note_novofinder").addClass("current");
	}
	});

    $(function(){
        $(window).scroll(function(){
			var initoffset_snp = $('#'+8).offset();
			var currenttop_snp = $(window).scrollTop()+100;
			if (currenttop_snp > initoffset_snp.top) {
				var topScroll=$("#left")[0].scrollHeight;
				var divheight=$("#left").height();
				var stop=topScroll-divheight;
				$("#left").scrollTop(stop);
			}else{
				$("#left").scrollTop(0);
			}
        })
    })