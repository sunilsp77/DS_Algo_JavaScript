var mergeInBetween = function (list1, a, b, list2) {
  let copy1 = list1;
  let copy2 = list1;

  let i = 0;
  while (i < a - 1 && copy1.next) {
    copy1 = copy1.next;
    i++;
  }
  const nodebeforelist2 = copy1;

  i = 0;
  while (i < b && copy2.next) {
    copy2 = copy2.next;
    i++;
  }
  nodebeforelist2.next = list2;

  let newhead = list1;

  //navigate to end to new list
  while (list1.next) {
    list1 = list1.next;
  }

  list1.next = copy2.next;
  return newhead;
};
