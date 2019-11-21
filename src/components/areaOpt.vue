<template>
	<div class="picker-box">
        <!--<p @click='pickerShow=true' v-if='codes.changeActive === true' style='color:#000;'>{{codes.province + codes.city + codes.county}}</p>
		<p @click='pickerShow=true'  v-if='codes.changeActive === false' style='color: #666;margin-right:5px;'>
			请选择
		</p>-->
        <div class='pieker-title'>
        	<mt-button type="primary" @click='closePicker(1)'>取消</mt-button>
        	<mt-button type="primary" @click='closePicker(2)'>确定</mt-button>
        </div>
		<mt-picker :slots="slots" value-key="name" @change="onValuesChange"></mt-picker>
	</div>
</template>
<script>
import Address from "@/utils/address.json";
export default {
  props: {
    codes: {
      type: Object,
      default: {
        province: "",
        city: "",
        county: "",
        changeActive: false
      }
    },
    type: {
      type: String,
      default: "text"
    }
  },
  data() {
    return {
      codeList: [],
      slots: [
        {
          flex: 1,
          values: Address,
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: Address[0].children,
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: Address[0].children[0].children,
          className: "slot5",
          textAlign: "center"
        }
      ]
    };
  },
  methods: {
    closePicker(type) {
      let codes =
        type === 1
          ? { province: "", city: "", county: "", changeActive: false }
          : this.codes;
      this.codes.changeActive = type === 1 ? false : true;
      this.$emit("getAddress", codes);
    },
    onValuesChange(picker, values) {
      if (this.type == "text") {
        this.codes.province = values[0].name;
        this.codes.city = values[1].name;
        this.codes.county = values[2].name;
      } else if (this.type == "code") {
        this.codes.province = values[0].code;
        this.codes.city = values[1].code;
        this.codes.county = values[2].code;
      }
      if (!values[0]) {
        this.$nextTick(() => {
          picker.setValues([
            values[0],
            values[0].children[0],
            values[0].children[0].children[0]
          ]);
        });
      } else {
        picker.setSlotValues(1, values[0].children);
        let town = [];
        if (values[1]) {
          town = values[1].children;
        }
        picker.setSlotValues(2, town);
      }
    }
  }
};
</script>
<style lang="scss" scoped="scoped">
.picker-box .mint-popup,
.picker-box .picker {
  width: 100%;
}
.pieker-title > button {
  width: 50%;
  height: 65px;
  border: none;
  font-size: 26px;
  border-radius: 0;
  &:first-child{
  	border-right:1px solid #fff;
  }
}
.picker-box /deep/ .picker-item{
	  font-size: 22px;
	  color:#222;
}

</style>