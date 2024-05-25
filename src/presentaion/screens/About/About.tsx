import React, {useState} from "react";
import {ScrollView, TextInput, View} from "react-native";

import Input from "../../components/shared/Input/Input";
import Header from "../../components/shared/Header";
import {useLoader, useNavigationHooks} from "../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../navigation/navigation-types";

import {userLogin} from "../../../redux";
import {Colors, Spacing, Typography} from "../../../styles";
import {styles} from "./styles";

const About = () => {
  const {goBack} = useNavigationHooks<MainNavigationAllScreensTypes>();

  return (
    <View style={styles.rootScreen}>
      <Header
        title={" "}
        centeredTitle=" عن الإغاثة الاسلامية"
        isShowHeaderShadow
        authHeader={true}
        style={{
          backgroundColor: Colors.WHITE,
          paddingHorizontal: Spacing.S16,
        }}
        onBack={goBack}
      />
      <ScrollView
        style={{paddingHorizontal: Spacing.S16, marginTop: Spacing.S40}}>
        <TextInput
          readOnly
          style={{
            backgroundColor: Colors.WHITE,
            color: Colors.BLACK,
            fontFamily: Typography.MEDIUM,
            fontSize: Typography.FS12,
          }}
          multiline
          value="تأسست الإغاثة الإسلامية عبر العالم في عام 1984 على يد الدكتور هاني البنا وبعض زملائه الدارسين في جامعة برمنغهام بالمملكة المتحدة استجابةً للمجاعة في إفريقيا. وبإطلاق نداء استغاثة، طرقوا أبواب المنازل والمتاجر، وزاروا المساجد طلباً للتبرعات، ودفعوا ما جمعوه لشراء الطعام للمتضررين من المجاعة.

وفي عام 1985، أطلقت الإغاثة الإسلامية مشروعها الأول، وهو عبارة عن دعم مزرعة دواجن في السودان. وفي نفس العام، استأجر مؤسسوها مكتبًا صغيرًا في مدينة برمنجهام في بريطانيا، ومن هناك جمعوا مبلغ 120,000 دولار أمريكي للاستجابة للمجاعة.
 وبحمد الله، نمت الإغاثة الإسلامية بمعدل سريع، وخلال السنوات الخمس التي تلت ذلك بدأت العمل في باكستان وملاوي والعراق وأفغانستان وموزمبيق وإيران وبلدان أخرى، لإغاثة الحالات الطارئة، وتوزيع الملابس والطعام، وتقديم الدعم الصحي، وبدأ مشروعها الكبير طويل المدى والذي يعتبر الآن برنامج كفالة الأيتام بالإغاثة الإسلامية.

ولقد أصبحت الإغاثة الإسلامية اليوم، بفضل الله، منظمة دولية عالمية، حيث تعمل في أكثر من 48 دولة وتقدم مساعدات في حالات الطوارئ، وتنفذ البرامج التنموية طويلة الأجل، وتقوم بحملات التوعية والمناصرة.

 يوجد مقرنا الرئيس في مدينة برمنجهام بالمملكة المتحدة، ولدينا مكاتب في 48 دولة حول العالم، 33 مكتب ميداني لتنفيذ المشاريع في 33 دولة وهي كالتالي: الاردن، لبنان، فلسطين، سوريا(تركيا)، اليمن، تشاد، تونس، كوسوفو، الهند، النيجر، مقدونيا، الشيشان، باكستان، البوسنة والهرسك، أفغانستان، العراق، الصومال، السودان،ملاوي، بنغلاديش، كينيا، جنوب السودان، سريلانكا، مالي، جنوب افريقيا، افريقيا الوسطى، البانيا، نيبال، الفلبين، اثيوبيا، ميانمار، الصين، اندونيسيا

بالإضافة إلى ذلك يوجد لدينا مكاتب لتنمية الموارد( جمع التبرعات) في 16 دولة وهي كالتالي: بريطانيا، أمريكا، كندا، ألمانيا، استراليا، إيطاليا، السويد، النرويج، بلجيكا، أسبانيا، هولندا، سويسرا، إيرلندا، ماليزيا، جنوب افريقيا، موريشيوس."
        />
      </ScrollView>
    </View>
  );
};

export default About;
